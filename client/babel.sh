#!/usr/bin/env bash
SCRIPT_DIR="$(dirname "$0")"
${SCRIPT_DIR}/node_modules/.bin/babel --presets react,es2015 ${SCRIPT_DIR}/src/ --watch --out-dir ${SCRIPT_DIR}/build/ --source-maps