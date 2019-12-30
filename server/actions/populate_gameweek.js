import { updateActiveGameweek } from '../db/gameweek';
import parseGameweekData from '../parser/parse_gameweek';

const URL_SCHEDULE = 'https://www.fantrax.com/newui/EPL/schedules.go?season=919';
// https://www.fantrax.com/newui/EPL/schedules.go?season=919#18
// view-source:https://www.fantrax.com/newui/EPL/scores.go?date=20191215
const SEL_CURRENT_GW = '/html/body/section/div[4]/div[4]/div[4]/div[1]/div[1]/div/div[2]/div[2]/div[2]';

export default async function populateGameWeekData(page) {

    console.log("Starting to populate gameweek data");
    // Locate the Schedule page
    await page.goto(URL_SCHEDULE);

    // Select current gameweek element
    const element = await page.waitForXPath(SEL_CURRENT_GW);

    // Select current gameweek text data
    const text = await page.evaluate(element => element.textContent, element);

    const gameweek = parseGameweekData(text);

    // Save current gameweek into database
    console.log("Saving gameweek data to database");
    updateActiveGameweek(gameweek);

    console.log("Finished populating gameweek data");
}

