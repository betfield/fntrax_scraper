#!/bin/bash
echo "Starting Fantrax scraper"
meteor --settings settings.json &>> /home/betfield/logs/fantrax.log

