shopt -s expand_aliases

ORIG=./raw-data/original
OUT=./raw-data/derived/2019-05-31
mkdir -p $ORIG $OUT/site-data

DB=$OUT/a2agc.db
EDB=$OUT/a2agc.db.e
DATA_SOURCES="$ORIG/box-health/Final Datasets"

alias sqlite="sqlite3 $DB"
alias sqlite3="sqlcipher"

source env.sh
