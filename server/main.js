import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import populateGameWeekData from './actions/populate_gameweek';
import populateTeamsData from './actions/populate_teams';
import fillTeamsData from './actions/fill_teams';
import { getAllTeams } from './db/teams';
import '../imports/publish/methods';
import '../imports/publish/fixtures';
import '../imports/publish/playerstats';

const CONFIG = require('./config/config');

let page, timer, teams;
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
    defaultViewport: {
        width: 1920,
        height: 1080
    },
    args: [
      `--window-size=1920,1080`,  // set browser size
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
    for (let i = 0; i < 9; i++) {
      pages.push(await browser.newPage());
    }

  } catch (e) {
    console.log(e);
  }
}

async function fill(pages, teams) {
  console.log("Starting data collection");    
  const promises = [];

  // Cycle through all team pages and collect the data
  for (let i = 0; i < pages.length; i++) {
    promises.push(await fillTeamsData(pages[i], teams[i]));
  }

  await Promise.all(promises);

  console.log("Finished data collection");

  if (timer) {
    fill(pages, teams);
  }
}

function startDataCollection(pages) {

    fill(pages, teams);

/*    return Meteor.setInterval(() => {
      fill(pages, teams);
    }, CONFIG.dataCollectionInterval);
*/ 
}

function stopDataCollection() {
  console.log("Stopping timer")
  //Meteor.clearInterval(timer);
  timer = false;
}

Meteor.methods({
  startDataCollection: function () {
    console.log("Starting data collection from Method");
    timer = true;
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
  }
});