import fetchAPIData from './fetch_data';
import parseLineups from '../parser/parse_lineups';

const CONFIG = require('../config/config');


export default async function fillTeamsData(fixture) {
    let data;

    console.log(fixture);
    const mapObj = {
        fixture_id: fixture.id
    };

    data = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
    console.log(data);

    parseLineups(data);
}
