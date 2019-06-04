# Advanced Analytics for IU’s Addictions Grand Challenge (A2AGC) Dataset

Scripts for compiling, validating, and documenting the A2AGC Dataset.

## Base Requirements

* bash
* Python 3+
* Java 1.8+
* Node JS 8+
* sqlite3
* sqlcipher
* GraphViz (dot)
* MkDocs

## Singularity

A Singularity 3 container is provided that installs all the dependencies needed for building the A2AGC dataset. You can build the container using this command as root: `singularity build container.sif Singularity`. This will create a `container.sif` file that can be invoked on command line: `$ ./container.sif` which will bring you into the container with all dependencies installed and at a shell prompt.

### Building the container without root

If you are in an environment that does not allow root access to build the container, you can use the `--remote` option using Singularity's CLI. See [their documentation](https://www.sylabs.io/guides/3.0/user-guide/build_a_container.html#remote) for details.

```bash
singularity build --remote container.sif Singularity
```
