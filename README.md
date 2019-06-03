# A2GC2 Dataset

Scripts for compiling, validating, and documenting the A2GC2 Dataset.

## Base Requirements

* bash
* Python 3+
* Java 1.8+
* Node JS 8+
* sqlite3
* sqlcipher
* GraphViz (dot)

## Singularity

A Singularity 3 container is provided that installs all the dependencies needed for building the A2GC2 dataset. You can build the container using this command as root: `singularity build container.sif Singularity`. This will create a `container.sif` file that can be invoked on command line: `$ ./container.sif` which will bring you into the container with all dependencies installed and at a shell prompt.
