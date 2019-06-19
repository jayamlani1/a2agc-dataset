shopt -s expand_aliases

ORIG=./raw-data/original
OUT=./raw-data/derived/2019-05-31
mkdir -p $ORIG $OUT

DB=$OUT/a2agc.db
EDB=$OUT/a2agc.db.e
DATA_SOURCES="$ORIG/box-health/Final Datasets"

SCHEMA_DIR=./docs/schema
SCHEMA_NAME=A2AGC

COLUMN_COUNTS=$OUT/column_counts.csv

alias sqlite="sqlite3 $DB"
alias sqlite3="sqlcipher"

source env.sh
