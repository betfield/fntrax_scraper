import fetchAPIData from './fetch_data';

const CONFIG = require('../config/config');


export default async function fillFixtureIncidentsData(fixture) {
    let data;

    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture incidents data
    data = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_INCIDENTS, mapObj);
    
    //const incidents = parseTeamsData(data.home, fixture.homeTeam, fixture.id);

    console.log(data);

    // Upsert data to database
    //console.log("Updating players for team " + homeTeam.id + " (" + homeTeam.name + ")");
    //console.log(players);

    //updatePlayerStats(homeTeam);
    //updatePlayerStats(awayTeam);
}
