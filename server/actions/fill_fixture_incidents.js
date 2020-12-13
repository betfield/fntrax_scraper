import fetchAPIData from './fetch_data';
import { updateFixtureStatus } from '../db/fixtures';

const CONFIG = require('../config/config');


export default async function fillFixtureIncidentsData(fixture) {
    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture incidents data
    const incidents = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_INCIDENTS, mapObj);
    console.log(incidents.incidents);
    updateFixtureStatus(fixture, incidents.incidents);

    // Upsert data to database
    //console.log("Updating players for team " + homeTeam.id + " (" + homeTeam.name + ")");
    //console.log(players);

    //updatePlayerStats(homeTeam);
    //updatePlayerStats(awayTeam);
}
