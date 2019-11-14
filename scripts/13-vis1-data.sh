#!/bin/bash
source constants.sh
set -ev

mkdir ${OUT}/site-data/vis1-data -p
touch ${OUT}/site-data/vis1-data/deaths.csv -c

sqlite3 $DB << EOF
.headers on
.mode csv
.output ${OUT}/site-data/vis1-data/deaths.csv
.read src/visualization1/extract-data.sql
.quit
EOF
