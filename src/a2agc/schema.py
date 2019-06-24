from typing import List, Mapping, overload

from xml.etree.ElementTree import Element, ElementTree, parse

# Types and aliases

Schema = ElementTree
Node = Element


# Loading

def load(xml: str) -> Schema:
    return parse(xml)


# Node queries

def getTables(schema: Schema) -> List[Node]:
    return schema.findall('.//tables/table')

def getColumns(table: Node) -> List[Node]:
    return table.findall('column')

def getAllColumns(schema: Schema) -> Mapping[str, List[Node]]:
    tables = getTables(schema)
    columns = [(getName(table), getColumns(table)) for table in tables]
    return dict(columns)


# Attribute queries

@overload
def getAttributes(node: Node, __attr: str) -> str: ...
@overload
def getAttributes(node: Node, __attr1: str, __attr2: str, *__attrs: str) -> List[str]: ...

def getAttributes(node, *attrs):
    values = [node.get(attr) for attr in attrs]
    return values[0] if len(values) == 1 else values

def getName(node: Node) -> str:
    return getAttributes(node, 'name')
