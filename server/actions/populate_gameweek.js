import { updateActiveGameweek } from '../db/gameweek';
import parseGameweekData from '../parser/parse_gameweek';

const CONFIG = require('../config/config');

export default async function populateGameWeekData(page) {

    console.log("Starting to populate gameweek data");
    // Locate the Schedule page
    await page.goto(CONFIG.URL_SCHEDULE);

    // Select current gameweek element
    const element = await page.waitForXPath(CONFIG.SEL_CURRENT_GW);

    // Select current gameweek text data
    const text = await page.evaluate(element => element.textContent, element);

    const gameweek = parseGameweekData(text);

    // Save current gameweek into database
    console.log("Saving gameweek data to database");
    updateActiveGameweek(gameweek);

    console.log("Finished populating gameweek data");
}

