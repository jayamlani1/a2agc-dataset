#!/bin/bash
source constants.sh
set -ev

sqlite3 $DB << EOF
PRAGMA foreign_keys = ON;
.headers on
.mode csv
.output ${OUT}/site-data/vis-geomap-opioid-deaths.csv
.read src/create-vis-geomap-opioid-deaths-data.sql
.quit
EOF

npm run ts-node src/create-vis-geomap-opioid-deaths-project.ts ${OUT}/site-data/vis-geomap-opioid-deaths.csv ${OUT}/site-data/ ../data/