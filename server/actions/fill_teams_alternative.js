import fetchAPIData from './fetch_data';
import { updatePlayerStats } from '../db/player_stats';

const CONFIG = require('../config/config');


export default async function fillTeamsData(fixture) {
    let data;

    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture lineup data
    data = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
    
    // Append fixture id to the lineup uobject 
    data.fixtureId = fixture.id;

    updatePlayerStats(data);
}
