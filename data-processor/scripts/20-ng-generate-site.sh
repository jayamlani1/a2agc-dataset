#!/bin/bash
source constants.sh
set -ev

cd a2agc

# Clear old data and copy latest
rm -rf src/assets/generated
mkdir -p src/assets/generated
cp -r ../$OUT/site-data/* src/assets/generated
cp ../CHANGELOG.md src/assets/generated

ng build --prod
