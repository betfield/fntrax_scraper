import { Meteor } from 'meteor/meteor';
import { loginPage, fillTeamsData } from './fantrax_live_stats';
import { parseTeamsData } from './parser';
import '../imports/publish/playerstats';

let page, timer;
const interval = 20*1000;

Meteor.startup(() => {

  run();
  
});

async function run() {
  // Login to Fantrax
  try {
    // Start login function with tries counter set to 1
    page = await loginPage(1);
    
    // Start data collection and return the timer handler 
    timer = startDataCollection();

  } catch (e) {
    console.log(e);
  }
}

async function fill(page) {
  // Load current player data for all teams and add to database
  parseTeamsData(await fillTeamsData(page));
}

function startDataCollection() {

  if (timer) {
    console.log("Timer already set.")
  } else {
    console.log("Setting up new timer")
    return Meteor.setInterval(() => {
      fill(page);
    }, interval);
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