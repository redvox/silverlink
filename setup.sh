#!/usr/bin/env bash
export CBold="\x1b[1m"
export CO="\x1b[1m\x1b[38;5;208m"
export CB="\x1b[1m\x1b[34m"
export CR="\x1b[1m\x1b[31m"
export CG="\x1b[1m\x1b[92m"
export CY="\x1b[1m\x1b[93m"
export CC="\x1b[0m"

VENV=true
DOCS_DEPS=false

usage() { echo "Usage: $0 [--no-venv] [--doc-deps]" 1>&2;
          echo "Options:"
          echo "	--no-venv   Install packages globally. May need root privileges."
          echo "	--doc-deps  Includes dependencies to generate docs (ie. Sphinx)."
          echo "	--doc-deps  Includes dependencies to generate docs (ie. Sphinx)."
          exit 1; }

while getopts "h-:" opt; do
  case $opt in
    -)
      case $OPTARG in
        no-venv)
            VENV=false
            ;;
        doc-deps)
            DOCS_DEPS=true
            ;;
        *)
            echo "Invalid option: $OPTARG" >&2
            usage
            ;;
      esac
      ;;
    h)
      usage
      ;;
    *)
      echo "Invalid option: -$OPTARG" >&2
      usage
      ;;
  esac
done

echo -e "${CG}Python Setup${CC}"

useVirtualEnv() {
  if [ -d "venv" ]; then
    echo -e "\x1b[1m\x1b[33mFound venv. Deleting.\x1b[0m"
    rm -rf venv
  fi
  echo -e "\x1b[1mPreparing VirtualEnv\x1b[0m"
  python3 -m pip install --user virtualenv
  python3 -m virtualenv venv
  source venv/bin/activate
}

python3 get-pip.py --user

if ${VENV}; then
  useVirtualEnv
  python3 -m pip install --upgrade pip
else
  echo -e "\x1b[1m\x1b[31m\nInstalling packages globally. This may need root privileges.\x1b[0m"
fi

python3 -m pip install -r requirements.txt

if ${DOCS_DEPS}; then
    echo -e "\x1b[1mInstalling dependencies for docs\x1b[0m"
    python3 -m pip install -r docs/requirements.txt
fi

echo -e "${CG}JavaScrip Setup${CC}"
cd client
npm install babel-cli babel-preset-react babel-preset-es2015