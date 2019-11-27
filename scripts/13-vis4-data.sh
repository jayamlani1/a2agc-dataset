#!/bin/bash
source constants.sh
set -ev

mkdir -p $OUT/site-data/visualization4

python3 ./src/visualization4/create.py $DB $OUT
