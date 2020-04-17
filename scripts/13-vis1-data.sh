#!/bin/bash
source constants.sh
set -ev

SRC_DIR=./src/visualization1
OUT_DIR=${OUT}/site-data/vis1-data
SITE_DATA_DIR=../data/vis1-data

mkdir -p ${OUT_DIR}

sqlite3 $DB << EOF
.headers on
.mode csv
.output ${OUT_DIR}/death-counts.csv
.read ${SRC_DIR}/extract_data.sql
.quit
EOF

python3 ${SRC_DIR}/census_data.py ${SRC_DIR}/census-data -o ${OUT_DIR}/census-counts.csv
