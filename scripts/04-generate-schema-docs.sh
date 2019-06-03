#!/bin/bash
source constants.sh

java -Xmx3G -jar lbis/schemaspy-6.0.0.jar -configFile a2gc2.properties -db $DB
