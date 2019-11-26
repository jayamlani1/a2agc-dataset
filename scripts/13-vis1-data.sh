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

python3 ${SRC_DIR}/chart.py                                            \
  ${SITE_DATA_DIR}/death-counts.csv ${SITE_DATA_DIR}/census-counts.csv \
  ${SRC_DIR}/vis-args-all-years.csv                                    \
  -o ${OUT_DIR}/all-years-vis.json

python3 ${SRC_DIR}/chart.py                                            \
  ${SITE_DATA_DIR}/death-counts.csv ${SITE_DATA_DIR}/census-counts.csv \
  ${SRC_DIR}/vis-args-by-year.csv                                      \
  --width 240 --height 200 --domain 0.3                                \
  -o ${OUT_DIR}/by-year-vis.json
