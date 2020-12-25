import fetchAPIData from './fetch_data';
import { updateFixtureLineupData } from '../db/fixtures';
import parseTeamsData from '../parser/parse_teams_data_fantrax';

const CONFIG = require('../config/config');


export default async function getFixturePlayerStats(fixture) {
    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture lineup data
    const lineups = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
    
    // Update lineup data for Fixture
    updateFixtureLineupData(fixture.id, lineups);

    // Parse lineup data for home and away teams
    const homeTeamPlayers = parseTeamsData(lineups.home, fixture.homeTeam, fixture.id, true);
    const awayTeamPlayers = parseTeamsData(lineups.away, fixture.awayTeam, fixture.id, false);

    return {
        homeTeamPlayers: homeTeamPlayers,
        awayTeamPlayers: awayTeamPlayers,
        ts: new Date()
    }
}