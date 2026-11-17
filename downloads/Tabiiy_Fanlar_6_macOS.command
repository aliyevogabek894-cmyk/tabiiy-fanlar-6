#!/bin/bash
# 6-sinf Tabiiy Fanlar — macOS Desktop App Launcher
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_URL="https://aliyevogabek894-cmyk.github.io/tabiiy-fanlar-6/"

if [ -f "$DIR/index.html" ]; then
  APP_URL="file://$DIR/index.html"
fi

if [ -d "/Applications/Google Chrome.app" ]; then
  open -na "Google Chrome" --args --app="$APP_URL"
elif [ -d "/Applications/Microsoft Edge.app" ]; then
  open -na "Microsoft Edge" --args --app="$APP_URL"
else
  open "$APP_URL"
fi
