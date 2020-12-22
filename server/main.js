import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import populateGameWeekData from './actions/populate_gameweek';
import populateTeamsData from './actions/populate_teams';
import getFixturePlayerStats from './actions/fetch_fixture_player_stats';
import fillTeamsPlayerData from './actions/fill_teams';
import fillFixtureIncidentsData from './actions/fill_fixture_incidents';
import { clearPlayerStats, updateFixturePlayerStats } from './db/player_stats';
import '../imports/publish/methods';
import '../imports/publish/fixtures';
import '../imports/publish/playerstats';
import { getAllTeams } from './db/teams';

const CONFIG = require('./config/config');

TIMER = false;

let page;
let fixturePlayerStats = [];

// Create a global variable for update time offset and gameweek, default based on config
timeOffset = Meteor.settings.public.timeDiff;
console.log("Session variable offset added: " + timeOffset);

// Define Selected Fixture as null. User needs to select the appropriate fixture from the Dashboard to assign a value
selectedFixture = null;
console.log("User needs to select the appropriate fixture from the Dashboard to start Data Collection");

Meteor.startup(() => {

  // Populate game week fixtures data
  //populateGameWeekData();

  // Populate Fantrax league teams data
  //populateFantraxLeagueData();
  
});

async function populateFantraxLeagueData() {

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

    // Populate League Teams' data
    await populateTeamsData(page);
    console.log("Teams populated");

    // Populate Teams Players
    const teams = getAllTeams();
    await fillTeamsPlayerData(page, teams);
    console.log("Teams' players populated");

    //await page.close();
    console.log('Page closed');
        
    //await browser.close();
		console.log('Browser closed');

  } catch (e) {
    console.log(e);
  }
}

function fill(fixture) {
  console.log("Starting data collection for fixture: " + fixture.id);    
  fixturePlayerStats.push(getFixturePlayerStats(fixture));

  console.log("Starting data collection for player incindents: " + fixture.id);
  fillFixtureIncidentsData(fixture);    
}

function startDataCollectionForFixture(fixture) {
  const iter = 0;
  
  // Start data collection for selected fixture
  setInterval(()=> {
    if (TIMER) fill(fixture);
  }, CONFIG.dataCollectionInterval)

  // Check if delay is defined and start respective process for updating players
  console.log("Starting player stats update with delay. Delay: " + timeOffset + ". Iterator: " + iter);
  if (timeOffset > 0) {
    updateStatsWithDelay(iter, timeOffset, fixture);
  } else {
    updateStats(iter, fixture);
  }
}

function stopDataCollection() {
  console.log("Stopping timer")
  //Meteor.clearInterval(timer);
  TIMER = false;
}

const updateStats = (iter, fixture) => {
  const stats = fixturePlayerStats[iter];

  if (TIMER) {
    if (stats !== undefined) {
      updateFixturePlayerStatsNow(fixture, stats.homeTeamPlayers, stats.awayTeamPlayers);

      iter++;
      console.log("Player stats updated. New iterator: " + iter);
      
      if (iter < fixturePlayerStats.length) {
        // Start update for the next element in the array
        updateStats(iter, fixture)
      } else {
        console.log("Reached the end of fixture player stats array");
        waitForNextFixturePlayerStats(timeOffset);
      }
    }
  } else {
    console.log("No timer detected. Stopping update fixture stats process");
    return;
  } 
}

const updateStatsWithDelay = (iter, delay, fixture) => {
  const stats = fixturePlayerStats[iter];

  if (TIMER) {
    if (stats !== undefined) {
      updateFixturePlayerStatsWithDelay(fixture, stats.homeTeamPlayers, stats.awayTeamPlayers, delay)
        .then(x => {
          console.log("Resolve from promise: ");
          console.log(x);

          iter++;
          console.log("Player stats updated with delay. New iterator: " + iter);
          
          if (iter < fixturePlayerStats.length) {
            // Start update for the next element in the array
            updateStatsWithDelay(iter, delay, fixture)
          } else {
            console.log("Reached the end of fixture player stats array");
            waitForNextFixturePlayerStats(delay);
          }
        })
      } else {
        console.log("No player stats available");
        waitForNextFixturePlayerStats(delay);
      }
  } else {
    console.log("No timer detected. Stopping update fixture stats process");
    return;
  } 
}

const updateFixturePlayerStatsWithDelay = (fixture, homeTeamPlayers, awayTeamPlayers, delay) => {
  console.log(`Waiting: ${delay / 1000} seconds.`);
  return new Promise((resolve) => {
      setTimeout(() => {
        updateFixturePlayerStatsNow(fixture, homeTeamPlayers, awayTeamPlayers);

          // TODO: Need to return/resolve something
          resolve(delay);
      }, delay);
  });
}

const updateFixturePlayerStatsNow = (fixture, homeTeamPlayers, awayTeamPlayers) => {
  // Upsert data to database
  console.log("Updating players for team " + fixture.homeTeam.name + " (" + fixture.homeTeam.nameCode + ")");
  updateFixturePlayerStats(fixture.homeTeam.nameCode, homeTeamPlayers);

  console.log("Updating players for team " + fixture.awayTeam.name + " (" + fixture.awayTeam.nameCode + ")");
  updateFixturePlayerStats(fixture.awayTeam.nameCode, awayTeamPlayers);
}

const waitForNextFixturePlayerStats = (delay) => {
  setTimeout(() => {
    console.log(`...waiting for ${delay / 1000} sec`);
  }, delay);
}

Meteor.methods({
  startDataCollection: function () {
    console.log("Starting data collection from Method for fixture: " + selectedFixture.id);
    TIMER = true;
    startDataCollectionForFixture(selectedFixture);
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
