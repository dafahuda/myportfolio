#!/bin/bash
set -e

WEBROOT="/var/www/portfolio"
REPO_DIR="/home/ubuntu/portfolio"
LOGFILE="/home/ubuntu/portfolio/deploy.log"

echo "[$(date)] Deploy started" >> $LOGFILE

cd $REPO_DIR

git pull origin main >> $LOGFILE 2>&1 || true
npm install >> $LOGFILE 2>&1
npm run build >> $LOGFILE 2>&1

cp -r $REPO_DIR/dist/* $WEBROOT/

echo "[$(date)] Deploy done" >> $LOGFILE
