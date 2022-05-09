# Use Latest Ubuntu version
FROM ubuntu:22.04

# Update and add universe repository
RUN apt-get update && apt-get install -y \
  software-properties-common && \
  add-apt-repository -y universe

# Set timezone to Eastern Timezone
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata && \
  ln -fs /usr/share/zoneinfo/America/New_York /etc/localtime && \
  dpkg-reconfigure --frontend noninteractive tzdata

# Install dependencies
RUN apt-get update && apt-get install -y \
  aptitude openjdk-8-jre python3 sqlite3 wget zip unzip \
  python3-pip tcl lftp build-essential libssl-dev nano \
  git gpg libreadline-dev libncurses-dev

# Install latest nodejs/npm
RUN pip3 install nodeenv && \
  nodeenv /usr/local --force --prebuilt

# Install angular cli
RUN npm install -g @angular/cli

# Install a simple file server for testing
RUN npm install -g http-server

# Install python requirements
RUN pip3 install mypy geocoder xlrd

# Build GraphViz
RUN mkdir -p /opt/graphviz && \
  cd /opt/graphviz && \
  wget https://graphviz.gitlab.io/pub/graphviz/stable/SOURCES/graphviz.tar.gz && \
  tar zxf graphviz.tar.gz && \
  cd graphviz-* && \
  ./configure && \
  make && \
  make install

# Build SQLCipher
RUN mkdir -p /opt/sqlcipher && \
  cd /opt/sqlcipher && \
  chmod u+x /opt/sqlcipher && \
  wget https://github.com/sqlcipher/sqlcipher/archive/v4.5.1.zip && \
  unzip v4.5.1.zip && \
  cd sqlcipher-4.5.1 && \
  ./configure --enable-tempstore=yes CFLAGS="-DSQLITE_HAS_CODEC" LDFLAGS="-lcrypto" --enable-readline && \
  make && \
  make install

# Clean up extra files
RUN apt-get -y autoremove --purge && \
  apt-get -y clean && \
  rm -rf /opt

CMD "/bin/bash"
