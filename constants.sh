shopt -s expand_aliases

export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export PYTHONPATH=./src
export MYPYPATH=$PYTHONPATH
export GPG_TTY=$(tty)

ORIG=./raw-data/original
OUT=./raw-data/derived/2019-11-27
mkdir -p $ORIG $OUT/site-data

DB=$OUT/a2agc.db
EDB=$OUT/a2agc.db.e
DATA_SOURCES="$ORIG/box-health/[Box Health] Final Datasets"

SCHEMA_DIR=./docs/schema
SCHEMA_NAME=A2AGC
SCHEMA="$SCHEMA_DIR/$SCHEMA_NAME.public.xml"

COLUMN_DISTRIBUTION_OVERRIDES=./column-distribution-overrides.yml
AGGREGATE_DATA="$OUT/aggregate-table-data.yml"

BASE_URL="https://demo.cns.iu.edu/a2agc-dataset/"

alias sqlite="sqlcipher $DB"
alias sqlite3="sqlcipher"

source env.sh
