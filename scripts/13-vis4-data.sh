#!/bin/bash
source constants.sh
set -ev

python3 ./src/visualization4/create.py $DB $OUT
