#!/bin/bash
source constants.sh
set -ev

mkdir -p $OUT/site-data/visualization4a

python3 ./src/visualization4a/create.py $DB $OUT
