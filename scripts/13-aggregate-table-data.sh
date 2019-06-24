#!/bin/bash
source constants.sh
set -ev

python3 ./src/tables/data.py $DB $SCHEMA -o $AGGREGATE_DATA
