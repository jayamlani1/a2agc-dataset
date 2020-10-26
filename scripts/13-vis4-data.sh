source constants.sh
set -ev

OUT_DIR=${OUT}/site-data/visualization4

mkdir -p ${OUT_DIR}

sqlite3 -header -csv ${DB} <  ./src/visualization4/data.sql > ${OUT_DIR}/data.csv

mkdir -p docs/data
rm -rf docs/data/visualization4
cp -r ${OUT_DIR} docs/data