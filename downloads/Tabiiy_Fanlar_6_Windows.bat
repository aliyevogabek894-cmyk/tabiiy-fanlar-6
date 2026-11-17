@echo off
chcp 65001 >nul
title 6-sinf Tabiiy Fanlar - Interaktiv Darslik, BSB va ChSB Platformasi
echo ================================================================
echo   6-SINF TABIIY FANLAR INTERAKTIV PLATFORMASI ISHGA TUSHMOQDA...
echo ================================================================

set "APP_URL=https://aliyevogabek894-cmyk.github.io/tabiiy-fanlar-6/"
if exist "%~dp0index.html" (
    set "APP_URL=%~dp0index.html"
)

where msedge >nul 2>nul
if %errorlevel%==0 (
    start "" msedge --app="%APP_URL%" --start-maximized
    exit
)

where chrome >nul 2>nul
if %errorlevel%==0 (
    start "" chrome --app="%APP_URL%" --start-maximized
    exit
)

start "" "%APP_URL%"
exit
