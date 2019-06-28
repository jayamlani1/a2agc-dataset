import argparse
import sqlite3
import sys
import typing as t

import altair
import pandas

from a2agc import schema


# Extract data

def _get_row_count(database: sqlite3.Connection, table: str) -> int:
    cursor = database.execute(f'''SELECT count(*) FROM { table };''')
    return int(cursor.fetchone()[0])

def _get_counts(database: sqlite3.Connection, table: str, column: str) -> t.List[t.Tuple[str, int]]:
    cursor = database.execute(f'''
        SELECT "{ column }", count("{ column }") FROM { table }
            WHERE "{ column }" IS NOT NULL
            GROUP BY "{ column }";
    ''')

    counts = [(str(value), int(count)) for value, count in cursor.fetchmany(2)]
    if len(counts) == 0:
        return 2 * [('?', 0)]
    elif len(counts) == 1:
        if counts[0][0] == '0':
            return counts + [('1', 0)]
        elif counts[0][0] == '1':
            return counts + [('0', 0)]
        else:
            return counts + [('?', 0)]
    else:
        return counts

def _get_data(database: sqlite3.Connection, table: str, column: str) -> t.List[t.Tuple[str, int]]:
    row_count = _get_row_count(database, table)
    counts = _get_counts(database, table, column)

    # Sort true before false, else alphabetical order
    if counts[0][0] == '0' or counts[0][0] > counts[1][0]:
        counts.reverse()

    # Rename 1 to True and 0 to False
    if counts[0][0] == '1' and counts[1][0] == '0':
        counts[0] = ('True', counts[0][1])
        counts[1] = ('False', counts[1][1])

    null_count = row_count - counts[0][1] - counts[1][1]
    counts.append(('Unknown/Missing', null_count))

    return counts


# Generate bar chart specification

def create(database: sqlite3.Connection, table: str, column: str) -> str:
    counts = _get_data(database, table, column)
    data = pandas.DataFrame({
        'x': [name for name, _unused in counts],
        'y': [count for _unused, count in counts]
    })

    bars = altair.Chart(data, width=600, height=600).mark_bar().encode(
        altair.X('x', axis=altair.Axis(title=column, labelAngle=0)),
        altair.Y('y', axis=altair.Axis(title='Count'))
    )

    text = bars.transform_joinaggregate(
        total='sum(y)'
    ).transform_calculate(
        percentage='datum.y / datum.total'
    ).mark_text(
        align='center',
        baseline='top',
        dy=-15
    ).encode(
       altair.Text('percentage:Q', format='.1%')
    )

    chart = bars + text
    return chart.to_json()


# Script functionality

def _create_command_line_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Produce data for a binary bar graph')
    parser.add_argument('table', help='table name')
    parser.add_argument('column', help='column name')
    parser.add_argument('database', type=sqlite3.connect, help='database file')
    parser.add_argument('-o', '--out', type=argparse.FileType('w'), default=sys.stdout,
                        help='output file')
    return parser

if __name__ == '__main__':
    parser = _create_command_line_parser()
    namespace = parser.parse_args()
    chart = create(namespace.database, namespace.table, namespace.column)
    with namespace.out:
        namespace.out.write(chart)
