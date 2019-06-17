Bootstrap: library
From: ubuntu:18.04

%post
    # Enable common packages and repositories for installation
    apt-get -y update
    apt-get -y install software-properties-common 
    add-apt-repository -y universe
    apt-get -y update

    # Install dependenceis
    apt-get -y install aptitude openjdk-8-jre python3 sqlite3 wget zip unzip python3-pip tcl lftp build-essential libssl-dev nano git gpg

    # Install latest nodejs/npm
    pip3 install nodeenv
    nodeenv /usr/local --force --prebuilt

    # Install a simple file server for testing
    npm install -g http-server

    # Install python requirements
    pip3 install mkdocs mkpdfs-mkdocs click-man

    # Install datasette for exploring the db during development
    pip3 install datasette datasette-vega datasette-cluster-map
    
    # Install man pages for mkdocs
    export LC_ALL=C.UTF-8
    export LANG=C.UTF-8
    click-man --target /usr/local/man/man1 mkdocs

    # Build GraphViz
    mkdir -p /opt/graphviz
    cd /opt/graphviz
    wget https://graphviz.gitlab.io/pub/graphviz/stable/SOURCES/graphviz.tar.gz
    tar zxf graphviz.tar.gz
    cd graphviz-*
    ./configure
    make
    make install

    # Build SQLCipher
    mkdir -p /opt/sqlcipher
    cd /opt/sqlcipher
    chmod u+x /opt/sqlcipher
    wget https://github.com/sqlcipher/sqlcipher/archive/v4.1.0.zip
    unzip v4.1.0.zip
    cd sqlcipher-4.1.0
    ./configure --enable-tempstore=yes CFLAGS="-DSQLITE_HAS_CODEC" LDFLAGS="-lcrypto"
    make
    make install

    # Clean up extra files
    apt-get -y autoremove --purge
    apt-get -y clean
    rm -rf /opt

%environment
    export LC_ALL=C.UTF-8
    export LANG=C.UTF-8

%runscript
    exec /bin/bash "$@"
