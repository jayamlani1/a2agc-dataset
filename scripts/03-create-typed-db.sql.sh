#!/bin/bash
source constants.sh
set -ev

for sql in src/schema-typing/*.sql
do

echo Running ${sql}...
sqlite3 $DB < $sql

done

python3 ./src/tables/lookup_locations.py $DB -w 0
