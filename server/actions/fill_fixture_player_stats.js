import fetchAPIData from './fetch_data';
import { updateFixturePlayerStats } from '../db/player_stats';
import parseTeamsData from '../parser/parse_teams_data_fantrax';

const CONFIG = require('../config/config');


export default async function fillFixturePlayerStats(fixture) {
    let data;

    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture lineup data
    data = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
    
    const homeTeamPlayers = parseTeamsData(data.home, fixture.homeTeam, fixture.id);
    const awayTeamPlayers = parseTeamsData(data.away, fixture.awayTeam, fixture.id);

    console.log(homeTeamPlayers);
    console.log(awayTeamPlayers);

    // Upsert data to database
    console.log("Updating players for team " + fixture.homeTeam.name + " (" + fixture.homeTeam.nameCode + ")");
    updateFixturePlayerStats(fixture.homeTeam.nameCode, homeTeamPlayers);

    console.log("Updating players for team " + fixture.awayTeam.name + " (" + fixture.awayTeam.nameCode + ")");
    updateFixturePlayerStats(fixture.awayTeam.nameCode, awayTeamPlayers);
}