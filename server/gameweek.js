import { Fixtures } from '../imports/collections';

const URL_SCHEDULE = 'https://www.fantrax.com/newui/EPL/schedules.go?season=919';
const SEL_CURRENT_GW = '/html/body/section/div[4]/div[4]/div[4]/div[1]/div[1]/div/div[2]/div[2]/div[2]';
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const HEADERS = ["Teams", "Time (EDT)", "Game Info", "TV"];
const CLUBS = {
    'LEI': 'Leicester City',
    'SOU': 'Southampton',
    'AST': 'Aston Villa',
    'MCI': 'Manchester City',
    'EVE': 'Everton',
    'BHA': 'Brighton and Hove Albion',
    'BOU': 'Bournemouth',
    'WAT': 'Watford',
    'SHU': 'Sheffield United',
    'WHU': 'West Ham United',
    'CHE': 'Chelsea',
    'BUR': 'Burnley',
    'WOL': 'Wolverhampton',
    'NEW': 'Newcastle United',
    'CRY': 'Crystal Palace',
    'ARS': 'Arsenal',
    'TOT': 'Tottenham Hotspur',
    'LIV': 'Liverpool',
    'MUN': 'Manchester United',
    'NOR': 'Norwich City'
    };

async function populateGameWeekData(page) {

    console.log("Starting to populate gameweek data");
    // Locate the Schedule page
    await page.goto(URL_SCHEDULE);

    // Select current gameweek element
    const element = await page.waitForXPath(SEL_CURRENT_GW);

    // Select current gameweek text data
    const text = await page.evaluate(element => element.textContent, element);

    // Construct array from gameweek text data
    const data = text.split("\n");

    // Remove empty elements from the array
    const gwData = removeEmtpyElements(data);

    // Identify matchday dates from array
    const datePos = getDatePositionsInArray(gwData);
    
    // Split gameweek array into sub-arrays based on matchday
    const matchdays = splitArrayToMatchdays(datePos, gwData);

    // Parse matchday elements into fixture objects
    let gameweek = parseMatchdayFixtures(matchdays);

    // Save current gameweek into database
    updateActiveGameweek(gameweek);

    console.log("Finished populating gameweek data");
}

function removeEmtpyElements(data) {
    let result = [];

    data.forEach(row => {
        // Remove all spaces/tabs from element
        row = row.trim();
        
        // If not empty, add element to the resulting array
        if (row !== '') {
            result.push(row);
        }
    });

    return result;
}

function getDatePositionsInArray(gwData) {
    let result = [];
    let idx = 0;

    gwData.forEach(row => {
        // If element contains a weekday reference, add element index to the resulting array
        if (WEEKDAYS.some((day)=> {
            return row.includes(day)
        })) {
            result.push(idx);
        }    
        idx++;    
    });

    return result;
}

function splitArrayToMatchdays(datePos, gwData) {
    let result = [];
    let i = 0;

    datePos.forEach((val, idx, arr) => {
        // Split the array based on the date positions
        if (val > 0) {
            result.push(gwData.slice(i, val));

            // If last element then include remaining array
            if (idx === arr.length - 1) {
                result.push(gwData.slice(val))
            } 
         
            i = val;
        }
    })

    return result;
}

function parseMatchdayFixtures(matchdays) {
    let result = [];

    // Split matchday into arryay of fixtures
    matchdays.forEach(matchdayFixturesArray => {
    
        let dayFixtures = [];

        // If element does not contain any header values, add it to the fixture array
        matchdayFixturesArray.forEach(row => {
            if (!HEADERS.some((header)=> {
                return row.includes(header)
            })) {
                dayFixtures.push(row);
            }    
        })

        // Create objects from the fixtures
        result.push(createFixtureObjects(dayFixtures));
    });

    return result;
}

function createFixtureObjects(arr) {
    let result = [];
    let fixture = {};

    // Set the object internal iterator to 1 for the first object
    let iter = 1;    
    // Assumption is that the first item in the array is always the date
    const date = arr[0];
        
    for (let i = 1; i < arr.length; i++) {
        switch (iter) {
            // Set the home team value
            case 1:
                fixture.home = arr[i];
                break;
            
            // Skip the 2nd iteration to leave out the "@" sign
            
            // Set the away team value
            case 3:
                fixture.away = arr[i];
                break;

            // Set the date/time value and push the resulting object into the return array
            // Initiate the iterator and fixture object
            case 4:
                fixture.ts = convertToTimestamp(date, arr[i]);
                result.push(addClubData(fixture));
                fixture = {};
                iter = 0;
                break;
        }

        iter++;
    }

    return result;
}

// Need to consider summer time?
function convertToTimestamp(date, time) {
    let ts = new Date(date + " " + time);
    ts.setUTCHours(ts.getUTCHours() + 7)
    return ts;
}

function addClubData(fixture) {
    fixture.homeShort = getClubShortName(fixture.home);
    fixture.awayShort = getClubShortName(fixture.away);

    return fixture;
}

function getClubShortName(club) {
    return Object.keys(CLUBS).find(key => CLUBS[key] === club);
}

function updateActiveGameweek(gameweek) {
    gameweek.forEach(gw => {
        gw.forEach(fixture => {
            Fixtures.upsert({
                "date": fixture.date,
                "time": fixture.time,
                "home": fixture.home
            },{
                $set: fixture
            });
        })
    })
}

export { populateGameWeekData };
