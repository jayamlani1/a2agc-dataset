#!/bin/bash
source constants.sh
set -ev

python3 ./src/tables/markdown.py $AGGREGATE_DATA ./docs/dataset/tables/table.template
