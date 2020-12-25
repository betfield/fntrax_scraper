import fetchAPIData from './fetch_data';

const CONFIG = require('../config/config');


export default async function fillFixtureIncidentsData(fixture) {
    // Update fixture id in the api params mapObj
    const mapObj = {
        fixture_id: fixture.id
    };

    // Fetch fixture data
    const fixtureUpdate = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_INFO, mapObj);
    //console.log(fixtureUpdate.event);

    // Fetch fixture incidents data
    const incidents = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_INCIDENTS, mapObj);
    console.log("Change timestamp: " + fixtureUpdate.event.changes.changeTimestamp);

    return {
        fixture: fixtureUpdate.event, 
        incidents: incidents.incidents
    }
}
