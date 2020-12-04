import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import populateGameWeekData from './actions/populate_gameweek';
import populateTeamsData from './actions/populate_teams';
import fillTeamsData from './actions/fill_teams_alternative';
import { getAllTeams } from './db/teams';
import { clearPlayerStats } from './db/player_stats';
import '../imports/publish/methods';
import '../imports/publish/fixtures';
import '../imports/publish/playerstats';

const CONFIG = require('./config/config');

TIMER = false;

let page, teams;
let pages = [];

// Create a global variable for update time offset and gameweek, default based on config
timeOffset = Meteor.settings.public.timeDiff;
console.log("Session variable offset added: " + timeOffset);

// Define Selected Fixture as null. User needs to select the appropriate fixture from the Dashboard to assign a value
selectedFixture = null;
console.log("User needs to select the appropriate fixture from the Dashboard to start Data Collection");

Meteor.startup(() => {

  // Populate game week fixtures data
  populateGameWeekData();

  //run();
  
});

async function run() {

  const browser = await puppeteer.launch({
    headless: Meteor.settings.public.headless,
    args: [
      Meteor.settings.public.args
    ] 
  });

  page = await browser.newPage();

  // Login to Fantrax
  try {
    // Start login function with tries counter set to 1
    page = await loginPage(page, 1);
    pages.push(page);

    // Populate League Teams' data
    await populateTeamsData(page);

    // Get all teams from database
    teams = getAllTeams();
    console.log("Teams loaded from database:");
    console.log(teams);

  } catch (e) {
    console.log(e);
  }
}

function fill(fixture) {
  console.log("Starting data collection for fixture: " + fixture.id);    
  fillTeamsData(fixture);
}

function startDataCollection(fixture) {
    setInterval(()=> {
      if (TIMER) fill(fixture);
    }, CONFIG.dataCollectionInterval)
}

function stopDataCollection() {
  console.log("Stopping timer")
  //Meteor.clearInterval(timer);
  TIMER = false;
}

Meteor.methods({
  startDataCollection: function () {
    console.log("Starting data collection from Method for fixture: " + selectedFixture.id);
    TIMER = true;
    startDataCollection(selectedFixture);
  },
  stopDataCollection: function() {
    console.log("Stopping data collection from Method");
    stopDataCollection();
  },
  getOffsetValue: function() {
    return timeOffset;
  },
  setOffsetValue: function(value) {
    timeOffset = value;
    console.log("Time offset changed to: " + timeOffset);
  },
  setSelectedFixture: function(value) {
    selectedFixture = value;
    console.log("Selected Fixture changed to: " + selectedFixture.id);
  },
  getSelectedFixture: function() {
    return selectedFixture;
  },
  clearPlayers: function () {
    console.log("Clear player stats requested");
    clearPlayerStats();
  }
});
