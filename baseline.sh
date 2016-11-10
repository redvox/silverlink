#!/usr/bin/env bash

OS=$(uname -s)
if [ ${OS} == "Linux" ]; then
    echo "Run Linux Setup"
    sudo apt-get install npm
elif [ ${OS} == "Darwin" ]; then
    echo "Run Mac Setup"
    brew install npm
else
    echo "Your OS is not supported"
fi

mkdir client
cd client
npm init --yes # to create a blank package.json file
npm install babel-cli babel-preset-react babel-preset-es2015

# Bundler
#npm install webpack

mkdir src/ build/
# create main.js
./node_modules/.bin/babel --presets react,es2015 src/ --watch --out-dir build/ --source-maps