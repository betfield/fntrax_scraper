import { Meteor } from 'meteor/meteor';
import puppeteer from 'puppeteer';
import loginPage from './actions/login';
import populateGameWeekData from './actions/populate_gameweek';
import populateTeamsData from './actions/populate_teams';
import getFixturePlayerStats from './actions/fetch_fixture_player_stats';
import fillTeamsPlayerData from './actions/fill_teams';
import fillFixtureIncidentsData from './actions/fill_fixture_incidents';
import { clearPlayerStats, updateFixturePlayerStats, updateFixturePlayerStatsAlternative } from './db/player_stats';
import { updateFixtureStatus } from './db/fixtures';
import '../imports/publish/methods';
import '../imports/publish/fixtures';
import '../imports/publish/playerstats';
import { getAllTeams } from './db/teams';

const CONFIG = require('./config/config');

TIMER = false;

let page;
let iter = 0;

// Create a global variable for update time offset and gameweek, default based on config
timeOffset = Meteor.settings.public.timeDiff;
console.log("Session variable offset added: " + timeOffset);

// Define Selected Fixture as null. User needs to select the appropriate fixture from the Dashboard to assign a value
selectedFixture = null;
console.log("User needs to select the appropriate fixture from the Dashboard to start Data Collection");

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

async function fill(fixture) {
  console.log("Starting data collection for fixture: " + fixture.id);    
  const stats = await getFixturePlayerStats(fixture);

  console.log("Starting data collection for player incidents: " + fixture.id);
  const incidents = await fillFixtureIncidentsData(fixture);
  
  return {
    stats: stats,
    incidents: incidents
  }
}

function startDataCollectionForFixture(fixture) {
  const dataCollectionInterval = setInterval(()=> {
    if (TIMER) {
      fill(fixture)
        .then((res) => {
          const stats = res.stats;
          const incidents = res.incidents;

          if (stats !== undefined) {
            // Increase global iterator and make a local copy of it for future reference
            iter++;
            const thisIter = iter;

            console.log("Update Fixture player stats for iter: " + thisIter + ". Time: " + stats.ts.getSeconds());
            
            if (timeOffset === 0) {
              updateFixturePlayerStatsNow(fixture, stats.homeTeamPlayers, stats.awayTeamPlayers);
              console.log("Player stats updated for iter: " + thisIter + ". Update time:" + new Date().getSeconds());

              updateFixtureStatus(incidents.fixture, incidents.incidents);
              console.log("Fixture status updated: " + fixture.id);
            } else {
              updateFixtureStatsWithDelay(fixture, stats.homeTeamPlayers, stats.awayTeamPlayers, incidents, timeOffset)
                .then(res => {
                  console.log("Player stats updated with delay for iter: " + thisIter + ". Update time:" + res.getSeconds());
                });
              }
          }
        });
    } else {
      console.log("No timer detected. Stopping update fixture stats process");
      clearInterval(dataCollectionInterval);
    }
  }, CONFIG.dataCollectionInterval)
}

function stopDataCollection() {
  console.log("Stopping timer")
  //Meteor.clearInterval(timer);
  TIMER = false;
}

const updateFixtureStatsWithDelay = (fixture, homeTeamPlayers, awayTeamPlayers, incidents, delay) => {
  console.log(`Waiting: ${delay / 1000} seconds.`);
  return new Promise((resolve) => {
      setTimeout(async () => {
        updateFixturePlayerStatsNow(fixture, homeTeamPlayers, awayTeamPlayers);
        updateFixtureStatus(incidents.fixture, incidents.incidents);
        resolve(new Date());
      }, delay);
  });
}

const updateFixturePlayerStatsNow = async (fixture, homeTeamPlayers, awayTeamPlayers) => {
  // Upsert data to database
  console.log("Updating players for team " + fixture.homeTeam.name + " (" + fixture.homeTeam.nameCode + ")");
  //console.log(homeTeamPlayers);
  //updateFixturePlayerStats(fixture.homeTeam.nameCode, homeTeamPlayers);
  updateFixturePlayerStatsAlternative(homeTeamPlayers);

  console.log("Updating players for team " + fixture.awayTeam.name + " (" + fixture.awayTeam.nameCode + ")");
  //console.log(awayTeamPlayers);
  //updateFixturePlayerStats(fixture.awayTeam.nameCode, awayTeamPlayers);
  updateFixturePlayerStatsAlternative(awayTeamPlayers);
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
  },
  populateGameWeek: function () {
    console.log("Populate game week fixtures data");
    populateGameWeekData();
  },
  populateLeagueData: function () {
    console.log("Populate Fantrax league teams data");
    populateFantraxLeagueData();
  }
});
