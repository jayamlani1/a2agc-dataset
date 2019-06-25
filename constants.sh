shopt -s expand_aliases

export PYTHONPATH=./src
export GPG_TTY=$(tty)

ORIG=./raw-data/original
OUT=./raw-data/derived/2019-05-31
mkdir -p $ORIG $OUT/site-data

DB=$OUT/a2agc.db
EDB=$OUT/a2agc.db.e
DATA_SOURCES="$ORIG/box-health/Final Datasets"

SCHEMA_DIR=./docs/schema
SCHEMA_NAME=A2AGC
SCHEMA="$SCHEMA_DIR/$SCHEMA_NAME.public.xml"

COLUMN_DISTRIBUTION_OVERRIDES=./column-distribution-overrides.yml
AGGREGATE_DATA="$OUT/aggregate-table-data.yml"

alias sqlite="sqlcipher $DB"
alias sqlite3="sqlcipher"

source env.sh
