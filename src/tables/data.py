import argparse
import sqlite3
import sys
import typing as t

import mypy_extensions as te
import yaml

from a2agc import schema
import binary_bar_chart
import infer_dist

# Types

Column = te.TypedDict('Column', {
    'name': str,
    'type': str,
    'remarks': str,
    'n_non_null': int,
    'pct_missing': float,
    'dist_type': str,
    'chart_data': str
})
Table = te.TypedDict('Table', {
    'name': str,
    'row_count': int,
    'remarks': str,
    'columns': t.Mapping[str, Column]
})
Data = t.Mapping[str, Table]


# Load/Save

def loadf(file: t.TextIO) -> Data:
    return yaml.safe_load(file)

def savef(file: t.TextIO, data: Data) -> None:
    file.write(yaml.dump(data, default_flow_style=False))

def load(file: str) -> Data:
    with open(file) as fp:
        return loadf(fp)

def save(file: str, data: Data) -> None:
    with open(file, 'w') as fp:
        savef(fp, data)


# Generate chart data

def _generate_chart(
    database: sqlite3.Connection, table: str, column: str, type_: str
) -> str:
    if type_ == infer_dist.BINARY_BAR_CHART:
        return binary_bar_chart.create(database, table, column)
    return '' # TODO handle other chart types

# Generate column data

def _create_column_obj(
    name: str, type_: str, remarks: str, count: int, row_count: int,
    dist_type: str, chart_data: str
) -> Column:
    return {
        'name': name,
        'type': type_,
        'remarks': remarks,
        'n_non_null': count,
        'pct_missing': 1 - count / row_count,
        'dist_type': dist_type,
        'chart_data': chart_data
    }

def _count_non_null_column_entries(
    database: sqlite3.Connection, table: str, column: str
) -> int:
    command = f'''SELECT count(*) FROM { table } WHERE nullif("{ column }", '') IS NOT NULL;'''
    cursor = database.execute(command)
    return int(cursor.fetchone()[0])

def _generate_column(
    database: sqlite3.Connection, table: schema.Node, column: schema.Node
) -> Column:
    table_name, row_count = schema.get_attributes(table, 'name', 'numRows')
    name, type_, remarks = schema.get_attributes(column, 'name', 'type', 'remarks')
    dist_type = infer_dist.infer(database, table, column)
    count = _count_non_null_column_entries(database, table_name, name)
    chart_data = _generate_chart(database, table_name, name, dist_type)
    return _create_column_obj(
        name, type_, remarks, count, int(row_count),
        dist_type, chart_data
    )


# Generate table data

def _create_table_obj(
    name: str, remarks: str, row_count: int, columns: t.Mapping[str, Column]
) -> Table:
    return {
        'name': name,
        'remarks': remarks,
        'row_count': row_count,
        'columns': columns
    }

def _generate_table(database: sqlite3.Connection, table: schema.Node) -> Table:
    name, count, remarks = schema.get_attributes(table, 'name', 'numRows', 'remarks')
    columns = {}
    for node in schema.get_columns(table):
        column = _generate_column(database, table, node)
        columns[column['name']] = column

    return _create_table_obj(name, remarks, int(count), columns)


# Generate data

def generate(database: sqlite3.Connection, schema_obj: schema.Schema) -> Data:
    tables = {}
    for node in schema.get_tables(schema_obj):
        table = _generate_table(database, node)
        tables[table['name']] = table

    return tables


# Script functionality

def _create_command_line_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Generate aggregate data for a2agc tables')
    parser.add_argument('database', type=sqlite3.connect, help='database file')
    parser.add_argument('schema', type=schema.load, help='schema file')
    parser.add_argument('overrides', nargs='?', type=infer_dist.load_override,
                        help='column distribution overrides')
    parser.add_argument('-o', '--out', type=argparse.FileType('w'), default=sys.stdout,
                        help='output file')
    return parser

def _override_dist_types(overrides: infer_dist.Override, data: Data) -> None:
    for table in data.values():
        for column in table['columns'].values():
            type_ = infer_dist.get_override(overrides, table['name'], column['name'])
            if type_:
                column['dist_type'] = type_

if __name__ == '__main__':
    parser = _create_command_line_parser()
    namespace = parser.parse_args()
    with namespace.out:
        data = generate(namespace.database, namespace.schema)
        if namespace.overrides:
            _override_dist_types(namespace.overrides, data)
        savef(namespace.out, data)
