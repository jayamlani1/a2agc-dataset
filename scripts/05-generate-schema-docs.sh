#!/bin/bash
source constants.sh
set -ev

rm -f A2AGC
ln -s $DB A2AGC

java -Xmx3G -jar libs/schemaspy-6.0.0.jar -configFile schemaspy.properties -db A2AGC

rm -f A2AGC
