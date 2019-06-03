#!/bin/bash
source constants.sh
set -ev

rm -f A2GC2
ln -s $DB A2GC2

java -Xmx3G -jar libs/schemaspy-6.0.0.jar -configFile a2gc2.properties -db A2GC2

rm -f A2GC2
