const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const HEADERS = ["Teams", "Time (EDT)", "Game Info", "TV", 'Results','Time (EST)','Game Info'];
const CLUBS = {
    'LEI': 'Leicester City',
    'SOU': 'Southampton',
    'AVL': 'Aston Villa',
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
    'NOR': 'Norwich City',
    'LUN': 'Leeds United',
    'WBA': 'West Bromwich Albion'
    };

export default function parseGameweekData(text) {

    // Construct array from gameweek text data
    const data = text.split("\n");

    // Remove empty elements from the array
    const gwData = removeEmtpyElements(data);

    // Identify matchday dates from array
    const datePos = getDatePositionsInArray(gwData);

    // Split gameweek array into sub-arrays based on matchday
    const matchdays = splitArrayToMatchdays(datePos, gwData);

    // Return parsed matchday elements into fixture objects
    return parseMatchdayFixtures(matchdays);
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
                let team = parseTeamName(arr[i]);
                
                fixture.away = team.name;
                fixture.awayScore = team.score;
                break;
            
            // Check if element contains '@' sign - means the fixture has not been started yet
            case 2:
                if (arr[i] === '@') {
                    let team = parseTeamName(arr[i+1]);

                    fixture.status = "NS";
                    fixture.home = team.name;
                    fixture.homeScore = team.score;
                    fixture.ts = convertToTimestamp(date, arr[i+2]);
                } else {

                    // If fixture already started then assign current element to away team value
                    // Next element will be fixture time in this case
                    let team = parseTeamName(arr[i]);

                    fixture.status = "STARTED";
                    fixture.home = team.name;
                    fixture.homeScore = team.score;
                    fixture.ts = convertToTimestamp(date, arr[i+1]);    
                }
                break;

            // Skip 3rd element

            // Set the date/time value and push the resulting object into the return array
            // Initiate the iterator and fixture object
            case 4:
                result.push(addClubData(fixture));
                fixture = {};
                iter = 0;
                break;
        }

        iter++;
    }

    console.log(result);

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

function parseTeamName(team) {
    let str = team.split(" ");
    let score = parseInt(str[str.length-1].replace("@", ""));
    let result = {}

    if (Number.isInteger(score)) {
        result.name = team.split(" " + score)[0];
        result.score = score;
    } else {
        result.name = team;
        result.score = "NaN";
    }

    return result;
}