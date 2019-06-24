from typing import List

import argparse
import pathlib
from a2agc.markdown import render
from data import Table, load as load_data


# Generate markdown

def generate(template: str, dirs: List[str], table: Table) -> str:
    return render(template, dirs, { 'table': table })


# Script functionality

def _createCommandLineParser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Generate markdown for a2agc tables')
    parser.add_argument('data', help='data file')
    parser.add_argument('template', help='markdown template')
    parser.add_argument('--dirs', nargs='+', help='additional template directories')
    parser.add_argument('-o', '--out', help='output directory')
    return parser

def _getOutputDir(template: str, out: str) -> pathlib.Path:
    if out:
        return pathlib.Path(out)
    return pathlib.Path(template).resolve().parent

if __name__ == '__main__':
    parser = _createCommandLineParser()
    namespace = parser.parse_args()
    data = load_data(namespace.data)
    template = namespace.template
    dirs = namespace.dirs or []
    out = _getOutputDir(template, namespace.out)
    for name, table in data.items():
        markdown = generate(template, dirs, table)
        with open(out / f'table-{ name }.md', 'w') as file:
            file.write(markdown)
