import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import populateGameWeekData from './actions/populate_gameweek';
import populateTeamsData from './actions/populate_teams';
import startFillTeamsData from './actions/fill_teams';
import { getAllTeams } from './db/teams';
import { clearPlayerStats } from './db/player_stats';
import '../imports/publish/methods';
import '../imports/publish/fixtures';
import '../imports/publish/playerstats';

TIMER = false;

let page, teams;
let pages = [];

// Create a global variable for update time offset, default based on config
timeOffset = Meteor.settings.public.timeDiff;
console.log("Session variable offset added: " + timeOffset);

Meteor.startup(() => {

  run();
  
});

async function run() {

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-gl-drawing-for-tests' // improve performance
    ] 
  });

  page = await browser.newPage();

  // Login to Fantrax
  try {
    // Populate current Gameweek data
    await populateGameWeekData(page);

    // Start login function with tries counter set to 1
    page = await loginPage(page, 1);
    pages.push(page);

    // Populate League Teams' data
    await populateTeamsData(page);

    // Get all teams from database
    teams = getAllTeams();
    console.log("Teams loaded from database:");
    console.log(teams);

    // Create a browser page for each team
    for (let i = 0; i < 4; i++) {
      pages.push(await browser.newPage());
    }

  } catch (e) {
    console.log(e);
  }
}

function fill(pages, teams) {
  console.log("Starting data collection");    
  startFillTeamsData(pages, teams);
}

function startDataCollection(pages) {
    fill(pages, teams);
}

function stopDataCollection() {
  console.log("Stopping timer")
  //Meteor.clearInterval(timer);
  TIMER = false;
}

Meteor.methods({
  startDataCollection: function () {
    console.log("Starting data collection from Method");
    TIMER = true;
    startDataCollection(pages);
  },
  stopDataCollection: function() {
    console.log("Stopping data collection from Method");
    stopDataCollection();
  },
  getOffsetValue: function(value) {
    return timeOffset;
  },
  setOffsetValue: function(value) {
    timeOffset = value;
    console.log("Time offset changed to: " + timeOffset);
  },
  clearPlayers: function () {
    console.log("Clear player stats requested");
    clearPlayerStats();
  },
});