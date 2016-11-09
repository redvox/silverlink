# Silverlink
Micro message board.

## Getting Started

### Obtaining it from source:

````bash
    $ git clone git@github.com:redvox/silverlink.git
````

### Installing from source:

````bash
    $ ./setup.sh [OPTIONS]
````
    Options:
        --no-venv   Installs packages globally. May need root privileges.  
        --doc-deps  Includes depedencies to generate documentation.

### Run:

````bash
    $ ./run.py [-h] [-p [PORT]] [-e [ENV]] [-w [WORKDIR]] [-g] [-v [VERBOSE]]

    optional arguments:
      -h, --help                
                            show help message and exit
      -p [PORT], --port [PORT]  
                            Port: Specify port. Default is 8080
      -v [VERBOSE], --verbose [VERBOSE]
                            Lets you set the loglevel. Application default: ERROR.
                            Option default: INFO
````

### Run tests:

````bash
    $ ./run-tests.sh <environment>
````

## Contribute

Silverlink is currently in active development and welcomes code improvements, bug fixes, suggestions and feature
requests. 

For those of your interested, providing documentation to other parties is equally welcome.

Please document all notable changes to this project in the provided changelog. Note that this project adheres to [Semantic Versioning](http://semver.org/).

## License

Distributed under the Apache License 2.0
