import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import fillTeamsData from './actions/fill_teams';
import { getAllTeams } from './db/teams';

const CONFIG = require('./config/config');

let page, timer;

// Get all teams from database
const teams = getAllTeams();
console.log("Teams loaded from database:");
console.log(teams);

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
  let pages = [];

  // Login to Fantrax
  try {

    // Start login function with tries counter set to 1
    page = await loginPage(page, 1);

    // Create a browser page for each team
    for (let i = 0; i < teams.length; i++) {
      page = await browser.newPage();
      pages.push(page);
    }

    // Start the first run without the timer
    await fill(pages, teams);

    // Start data collection and return the timer handler 
    timer = startDataCollection(pages);
    
  } catch (e) {
    console.log(e);
  }
}

async function fill(pages, teams) {
  console.log("Starting data collection");    
  
  // Cycle through all team pages and collect the data
  for (let i = 0; i < teams.length; i++) {
    await fillTeamsData(pages[i], teams[i]);
  }

  console.log("Finished data collection");
}

function startDataCollection(pages) {

  if (timer) {
    console.log("Timer already set.")
  } else {
    console.log("Setting up new timer")
    return Meteor.setInterval(() => {
      fill(pages, teams);
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