const URL_TEAMS = 'https://www.fantrax.com/fantasy/league/fme67lofjyyvq48x/team/owners';
const SEL_TABLE = '/html/body/app-root/div/div[1]/div/app-league-team-owners/div/section/div[2]';

async function populateTeamsData(page) {
    console.log("Starting to populate teams data");
    // Locate the Teams page
    await page.goto(URL_TEAMS);

    // Select Teams table
    const element = await page.waitForXPath(SEL_TABLE);

    // Select Teams table text data
    const text = await page.evaluate(element => element.innerText, element);
    
    // Construct array from Teams table text data
    let data = text.split(',');
    
    let result = [];

    data.forEach((row, idx, arr) => {
        result.push(row.split('\n'))
    })
    
    console.log(result);

    /*
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

    //console.log(gameweek);
*/
    console.log("Finished populating teams data");
}

export { populateTeamsData };