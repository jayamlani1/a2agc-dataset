# Advanced Analytics for IU’s Addictions Grand Challenge (A2AGC) Dataset

Scripts for compiling, validating, and documenting the A2AGC Dataset.

## Change Log

See [CHANGELOG](CHANGELOG.md)

## Base Requirements

* bash
* Python 3+
* Java 1.8+
* Node JS 8+
* sqlite3
* sqlcipher
* GraphViz (dot)
* Altair
* MkDocs

## Singularity

A Docker container is provided that installs all the dependencies needed for building the A2AGC dataset. You can install the container using this command: `singularity build container.sif docker://cnsiu/a2agc-dataset`. This will create a `container.sif` file that can be invoked on command line: `$ ./container.sif` which will bring you into the container with all dependencies installed and at a shell prompt.
