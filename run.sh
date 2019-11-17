#!/bin/bash
echo "Starting Fantrax scraper"
export MONGO_URL=mongodb://localhost:3001/meteor
meteor --port 3003 &>> /home/betfield/logs/fantrax.log 
