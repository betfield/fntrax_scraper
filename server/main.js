import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import fillTeamsData from './actions/fill_teams';
import { getAllTeams } from './db/teams';
import '../imports/publish/methods';

const CONFIG = require('./config/config');

let page, timer;

// Get all teams from database
const teams = getAllTeams();
console.log("Teams loaded from database:");
console.log(teams);

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
    args: [`--window-size=1920,1080`] // set browser size
  });

  page = await browser.newPage();

  // Login to Fantrax
  try {

    // Start login function with tries counter set to 1
    page = await loginPage(page, 1);

  } catch (e) {
    console.log(e);
  }
}

async function fill(page, teams) {
  console.log("Starting data collection");    
  
  // Cycle through all team pages and collect the data
  for (let i = 0; i < teams.length; i++) {
    await fillTeamsData(page, teams[i]);
  }

  console.log("Finished data collection");
}

function startDataCollection(page) {

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
    timer = startDataCollection(page);
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