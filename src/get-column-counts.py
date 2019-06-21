import argparse
import sqlite3

# Note: This does NOT sanitize the table or column names!
def createCountsQuery(table, columns):
    counters = map(lambda c: 'count("' + c + '")', columns)
    return f'''SELECT count(*), { ', '.join(counters) } FROM { table };'''

def main(db, table, columns):
    query = createCountsQuery(table, columns)
    return db.execute(query).fetchone()

# Script functionality
def createCommandLineParser():
    parser = argparse.ArgumentParser(description='Query counts for columns in a table')
    parser.add_argument('db', type=sqlite3.connect, help='A sqlite database file')
    parser.add_argument('table', help='A table name in the database')
    parser.add_argument('columns', nargs=argparse.REMAINDER, help='Column names to do count for')
    return parser

if __name__ == '__main__':
    parser = createCommandLineParser()
    namespace = parser.parse_args()
    counts = main(namespace.db, namespace.table, namespace.columns)
    print('ROW_COUNTS', *namespace.columns)
    print(' '.join(map(str, counts)))
