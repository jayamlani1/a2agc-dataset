from typing import Any, Mapping, TextIO
from mypy_extensions import TypedDict

import argparse
import sqlite3
import sys
import yaml

from a2agc.schema import (
    Node, Schema, getAttributes, getColumns,
    getTables, load as load_schema
)

# Types

Column = TypedDict('Column', {
    'name': str,
    'type': str,
    'remarks': str,
    'n_non_null': int,
    'pct_missing': float
})
Table = TypedDict('Table', {
    'name': str,
    'row_count': int,
    'remarks': str,
    'columns': Mapping[str, Column]
})
Data = Mapping[str, Table]


# Load/Save

def loadf(file: TextIO) -> Data:
    return yaml.safe_load(file)

def savef(file: TextIO, data: Data) -> None:
    file.write(yaml.dump(data, default_flow_style=False))

def load(file: str) -> Data:
    with open(file) as fp:
        return loadf(fp)

def save(file: str, data: Data) -> None:
    with open(file, 'w') as fp:
        savef(fp, data)


# Generate data

def _generate_column(conn: sqlite3.Connection, table: str, column: Node, row_count: int) -> Column:
    name, type_, remarks = getAttributes(column, 'name', 'type', 'remarks')
    count = conn.execute(f'''
        SELECT count(*) FROM { table } WHERE nullif("{ name }", '') IS NOT NULL;
    ''').fetchone()[0]
    return {
        'name': name,
        'type': type_,
        'remarks': remarks,
        'n_non_null': count,
        'pct_missing': 1 - count / row_count
    }

def _generate_table(conn: sqlite3.Connection, table: Node) -> Table:
    name, row_count, remarks = getAttributes(table, 'name', 'numRows', 'remarks')
    columns = getColumns(table)
    data_gen = (_generate_column(conn, name, column, int(row_count)) for column in columns)
    data = dict((column['name'], column) for column in data_gen)
    return {
        'name': name,
        'row_count': int(row_count),
        'remarks': remarks,
        'columns': data
    }

def generate(database: str, schema: Schema) -> Data:
    conn = sqlite3.connect(database)
    data_gen = (_generate_table(conn, table) for table in getTables(schema))
    data = dict((table['name'], table) for table in data_gen)
    return data


# Script functionality

def _createCommandLineParser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Generate aggregate data for a2agc tables')
    parser.add_argument('database', help='database file')
    parser.add_argument('schema', help='schema file')
    parser.add_argument('-o', '--out', type=argparse.FileType('w'), default=sys.stdout,
                        help='output file')
    return parser

if __name__ == '__main__':
    parser = _createCommandLineParser()
    namespace = parser.parse_args()
    with namespace.out:
        schema = load_schema(namespace.schema)
        data = generate(namespace.database, schema)
        savef(namespace.out, data)
