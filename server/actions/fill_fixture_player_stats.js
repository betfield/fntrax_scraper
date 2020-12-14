import fetchAPIData from './fetch_data';
import { updateFixturePlayerStats } from '../db/player_stats';
import { updateFixtureLineupData } from '../db/fixtures';
import parseTeamsData from '../parser/parse_teams_data_fantrax';

const CONFIG = require('../config/config');


export default async function fillFixturePlayerStats(fixture) {
    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture lineup data
    const lineups = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
    
    // Update lineup data for Fixture
    updateFixtureLineupData(fixture.id, lineups);

    // Parse lineup data for home and away teams
    const homeTeamPlayers = parseTeamsData(lineups.home, fixture.homeTeam, fixture.id);
    const awayTeamPlayers = parseTeamsData(lineups.away, fixture.awayTeam, fixture.id);

    // Upsert data to database
    console.log("Updating players for team " + fixture.homeTeam.name + " (" + fixture.homeTeam.nameCode + ")");
    updateFixturePlayerStats(fixture.homeTeam.nameCode, homeTeamPlayers);

    console.log("Updating players for team " + fixture.awayTeam.name + " (" + fixture.awayTeam.nameCode + ")");
    updateFixturePlayerStats(fixture.awayTeam.nameCode, awayTeamPlayers);
}