#!/bin/bash
source constants.sh
set -ev

rm -f $COLUMN_COUNTS
echo "Table,Column,n_non_null" >> $COLUMN_COUNTS

tables=$(python3 ./src/get-table-columns.py "$SCHEMA_DIR/$SCHEMA_NAME.public.xml")
while read -ra columns
do
    result=$(python3 ./src/get-column-counts.py $DB ${columns[@]})
    IFS=$'\n' result=($result)
    unset IFS

    table=${columns[0]}
    headers=(${result[0]})
    counts=(${result[1]})

    for index in "${!headers[@]}"
    do
        echo "$table,${headers[index]},${counts[index]}" >> $COLUMN_COUNTS
    done
done <<< "$tables"
