#!/bin/bash
source constants.sh
set -ev

python3 ./src/visualization4a/create.py $DB $OUT
