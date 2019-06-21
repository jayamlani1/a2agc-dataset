import argparse
import sys
import xml.etree.ElementTree as ElementTree

def getTables(tree):
    return tree.findall('tables/table')

def getColumns(table):
    return table.findall('column')

def getElementName(el):
    return el.get('name')

def getNames(table):
    result = [getElementName(table)]
    result.extend(map(getElementName, getColumns(table)))
    return result

def main(xml):
    tree = ElementTree.parse(xml)
    tables = getTables(tree)
    return [getNames(table) for table in tables]

# Script functionality
def createCommandLineParser():
    parser = argparse.ArgumentParser(description='Extract tables and column names')
    parser.add_argument('schema', nargs='?', type=open, default=sys.stdin,
                        help='xml schema file')
    return parser

if __name__ == '__main__':
    parser = createCommandLineParser()
    namespace = parser.parse_args()
    result = main(namespace.schema)
    for group in result:
        print(' '.join(group))