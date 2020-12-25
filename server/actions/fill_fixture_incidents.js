import fetchAPIData from './fetch_data';
import { updateFixtureStatus } from '../db/fixtures';

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
    //console.log(incidents.incidents);

    updateFixtureStatus(fixtureUpdate.event, incidents.incidents);

    console.log("Fixture status updated: " + fixture.id);
}
