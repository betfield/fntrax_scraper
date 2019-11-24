const CONFIG = require('../config/config');

const URL_TEAM = 'https://www.fantrax.com/fantasy/league/fme67lofjyyvq48x/team/roster';
const URL_TEAM_RESP = 'https://www.fantrax.com/fxpa/req?leagueId=fme67lofjyyvq48x';
const SEL_GAMEWEEK = '//*[@id="mat-select-1"]';
const SEL_GW_CURRENT = '//*[@id="mat-option-11"]';
const SEL_GW_PREVIOUS = '/html/body/app-root/div/div[1]/div/app-league-team-roster/div/section/filter-panel/div/div[4]/div[1]/mat-form-field/div/div[1]/div[4]/button[1]/span/mat-icon';

export default async function fillTeamsData(page, teams) {
    console.log("Starting data collection");
    // Locate the Team Roster page
    await page.goto(URL_TEAM);

    // Select current gameweek
    await page.waitForXPath(SEL_GAMEWEEK).then((result) => result.click());
    await page.waitForXPath(SEL_GW_CURRENT).then((result) => result.click());

    // Select previous gameweek in case TEST MODE
    //if (CONFIG.testMode) {
        await page.waitForXPath(SEL_GW_PREVIOUS).then((result) => result.click());
    //}
    
    let teamsData = [];
    
    teamsData[0] = await getTeamData(page, teams[0]);
    console.log("Data for team nr 0 (" + teams[0].name + ") loaded");

    // Cycle through all team pages and collect the data
    for (let i = 1; i < CONFIG.nrTeams; i++) {
        
        await page.waitForXPath('//*[@id="mat-select-0"]').then((result) => result.click());
        await page.waitForXPath('//*[@id="mat-option-' + i + '"]').then((result) => result.click());

        teamsData[i] = await getTeamData(page, teams[i]);
        console.log("Data for team nr " + i + " (" + teams[i].name + ") loaded");
    }

    console.log("Finished data collection");
    return teamsData;
}

async function getTeamData(page, team) {
    let stats;

    await page.waitForResponse(URL_TEAM_RESP).then(
        (response) => response.json().then(
            (res) => stats = res.responses[0].data.tables
        ));
        
    return { "stats": stats, "team": team };
}