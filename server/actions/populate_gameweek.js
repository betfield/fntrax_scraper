import { updateActiveGameweek } from '../db/gameweek';
import fetchAPIData from './fetch_data';

const CONFIG = require('../config/config');

export default async function populateGameWeekData() {

    // Fetch gameweek data
    console.log("Starting to populate gameweek data");
    const gameweek = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURES, Meteor.settings.public.apiParams);
    
    // Save current gameweek into database
    console.log("Saving gameweek data to database");
    console.log(gameweek.events);
    updateActiveGameweek(gameweek.events);

    console.log("Finished populating gameweek data");
}

