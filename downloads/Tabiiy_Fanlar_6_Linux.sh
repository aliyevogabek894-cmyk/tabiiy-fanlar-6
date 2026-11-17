#!/usr/bin/env bash
# 6-sinf Tabiiy Fanlar — Linux Desktop App Launcher
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_URL="https://aliyevogabek894-cmyk.github.io/tabiiy-fanlar-6/"

if [ -f "$DIR/index.html" ]; then
  APP_URL="file://$DIR/index.html"
fi

if command -v google-chrome >/dev/null 2>&1; then
  google-chrome --app="$APP_URL" &
elif command -v chromium-browser >/dev/null 2>&1; then
  chromium-browser --app="$APP_URL" &
elif command -v microsoft-edge >/dev/null 2>&1; then
  microsoft-edge --app="$APP_URL" &
else
  xdg-open "$APP_URL" &
fi
