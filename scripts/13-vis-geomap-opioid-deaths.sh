#!/bin/bash
source constants.sh
set -ev

sqlite3 $DB << EOF
PRAGMA foreign_keys = ON;
.headers on
.mode csv
.output ${OUT}/site-data/vis-geomap-opioid-deaths.csv

SELECT d.CASE_NUMBER,
    d.LAST_NAME,
    d.FIRST_NAME,
    d.SEX,
    CASE WHEN d.SEX = 1 THEN 'blue'
        WHEN d.SEX = 0 THEN 'pink'
        ELSE 'white' END AS 'SEX\$\$color',
    d.HOME_ZIP,
    d.HOME_STATE,
    CASE WHEN d.HOME_STATE = 'IN' THEN 'brown'
        ELSE 'black' END AS 'HOME_STATE\$\$color',
    d.INJURY_ZIP,
    r.N_OPIOID_PRESCRIPTIONS,
    ( CAST(r.N_OPIOID_PRESCRIPTIONS AS real) / ( SELECT max(N_OPIOID_PRESCRIPTIONS) FROM rollup1 ) * 500) + 100 AS 'N_OPIOID_PRESCRIPTIONS\$\$areaSize'
FROM deaths as d
    INNER JOIN rollup1 as r ON d.CASE_NUMBER = r.CASE_NUMBER
ORDER BY d.CASE_NUMBER ASC;

.quit
EOF