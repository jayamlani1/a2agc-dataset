#!/bin/bash
source constants.sh
set -ev

OUT_DIR=${OUT}/site-data/visualization2

mkdir -p ${OUT_DIR}

sqlite3 -header -csv ${DB} <  ./src/visualization2/data.sql > ${OUT_DIR}/data.csv

mkdir -p docs/data
rm -rf docs/data/visualization2
cp -r ${OUT_DIR} docs/data
