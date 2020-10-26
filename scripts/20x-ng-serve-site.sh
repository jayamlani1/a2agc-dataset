#!/bin/bash
source constants.sh
set -ev

cd a2agc

# Clear old data and copy latest
rm -rf src/assets/generated
mkdir -p src/assets/generated
cp -r ../$OUT/site-data/* src/assets/generated

ng serve --port $DEV_PORT --poll 5000
