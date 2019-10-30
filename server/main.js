import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import fillTeamsData from './actions/fill_teams';
import populateGameWeekData from './actions/populate_gameweek';
import populateTeamsData from './actions/populate_teams';
import parseTeamsData from './parser/parse_teams_data';
import '../imports/publish/playerstats';
import '../imports/publish/fixtures';

const CONFIG = require('./config/config');

let page, teams, timer;

Meteor.startup(() => {

  run();
  
});

async function run() {

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
        width: 1920,
        height: 1080
    },
    args: [`--window-size=1920,1080`] // set browser size
  });

  page = await browser.newPage();

  // Login to Fantrax
  try {
    // Populate current Gameweek data
    await populateGameWeekData(page);

    // Start login function with tries counter set to 1
    page = await loginPage(page, 1);

    // Populate League Teams' data
    teams = await populateTeamsData(page);
    
    // Start the first run without the timer
    fill(page, teams);

    // Start data collection and return the timer handler 
    timer = startDataCollection();
    
  } catch (e) {
    console.log(e);
  }
}

async function fill(page, teams) {
  // Load current player data for all teams and add to database
  parseTeamsData(await fillTeamsData(page, teams));
}

function startDataCollection() {

  if (timer) {
    console.log("Timer already set.")
  } else {
    console.log("Setting up new timer")
    return Meteor.setInterval(() => {
      fill(page, teams);
    }, CONFIG.dataCollectionInterval);
  }
}

function stopDataCollection() {
  console.log("Stopping timer")
  Meteor.clearInterval(timer);
  timer = null;
}

Meteor.methods({
  startDataCollection: function () {
    console.log("Starting data collection from Method");
    startDataCollection();
  },
  stopDataCollection: function() {
    console.log("Stopping data collection from Method");
    stopDataCollection();
  }
});