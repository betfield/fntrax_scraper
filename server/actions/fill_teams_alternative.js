import fetchAPIData from './fetch_data';
const CONFIG = require('../config/config');


export default async function fillTeamsData(fixture) {
    let result;

    console.log(fixture);
    const mapObj = {
        fixture_id: fixture.id
    };

    result = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);

    console.log(result);
}
