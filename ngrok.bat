@echo off
cd /d %~dp0
cmd /k ngrok http 192.168.0.10:80
npx ngrok.cmd http 80
npx ngrok.cmd http 8000