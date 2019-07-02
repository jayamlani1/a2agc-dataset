import argparse
import sqlite3
import sys
import typing as t

import altair
import pandas


# Types

CountPair = t.Tuple[str, int]
CountPairs = t.List[CountPair]


# Query counts

def _get_counts(database: sqlite3.Connection, table: str, column: str) -> CountPairs:
    count_cursor = database.execute(f'''
        SELECT "{ column }", count("{ column }") FROM "{ table }"
            WHERE "{ column }" IS NOT NULL AND "{ column }" != ''
            GROUP BY "{ column }";
    ''')
    total_cursor = database.execute(f'''
        SELECT count(*) FROM "{ table }";
    ''')

    count_rows = count_cursor.fetchall()
    total_row = total_cursor.fetchone()

    counts = [(str(value), int(count)) for value, count in count_rows]
    total = int(total_row[0])
    missing = total - sum(map(lambda o: o[1], counts))

    counts.append(('Unknown/Missing', missing))
    return counts


# Normalization

def _rename(pairs: CountPairs, name_map: t.Mapping[str, str]) -> CountPairs:
    return [(name_map.get(value, value), count) for value, count in pairs]


# Bar chart generation

def create(
    database: sqlite3.Connection, table: str, column: str,
    name_map: t.Mapping[str, str] = {},
    transform: t.Optional[t.Callable[[CountPairs], CountPairs]] = None
) -> altair.Chart:
    count_pairs = _get_counts(database, table, column)
    transformed_pairs = transform(count_pairs) if transform else count_pairs
    named_pairs = _rename(transformed_pairs, name_map)
    sorted_pairs = sorted(named_pairs[:-1]) + [named_pairs[-1]]
    names, counts = zip(*sorted_pairs) # Unzip
    data = pandas.DataFrame({ 'x': list(names), 'y': list(counts) })

    bars = altair.Chart(data, width=300, height=300).mark_bar().encode(
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
    return chart


# Script functionality

def _create_command_line_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Generate a vega bar chart')
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
    chart.save(namespace.out, 'json')
    namespace.out.close()
