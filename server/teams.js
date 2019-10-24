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

    data.forEach((row, idx) => {
        const team = row.split('\n');
        const owner = String(team[4]).split('\t');

        result.push({
            "name": team[3],
            "abbrev": owner[1],
            "user": owner[2],
            "id": idx
        })
    })

    console.log("Finished populating teams data");

    return result;
}

export { populateTeamsData };