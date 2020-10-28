#!/bin/bash
source constants.sh
set -ev

OUT_DIR=${OUT}/site-data/visualization5

mkdir -p ${OUT_DIR}

sqlite3 -header -csv ${DB} < ./a2agc/src/assets/pages/vis5-opioid-trajectories/data.sql > ${OUT_DIR}/data.csv

mkdir -p docs/data
rm -rf docs/data/visualization5
cp -r ${OUT_DIR} docs/data
