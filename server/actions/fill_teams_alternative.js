import fetchAPIData from './fetch_data';
import { updatePlayerStats } from '../db/player_stats';
import parseTeamsData from '../parser/parse_teams_data_alternative';

const CONFIG = require('../config/config');


export default async function fillTeamsData(fixture) {
    let data;

    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture lineup data
    data = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
    
    const homeTeam = parseTeamsData(data.home, fixture.homeTeam, fixture.id);
    const awayTeam = parseTeamsData(data.away, fixture.awayTeam, fixture.id);

    console.log(homeTeam);

    // Upsert data to database
    console.log("Updating players for team " + team.id + " (" + team.name + ")");
    //console.log(players);

    updatePlayerStats(data);
}
