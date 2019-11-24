const CONFIG = require('../config/config');

const URL_TEAM = 'https://www.fantrax.com/fantasy/league/fme67lofjyyvq48x/team/roster;';
const URL_TEAM_RESP = 'https://www.fantrax.com/fxpa/req?leagueId=fme67lofjyyvq48x';

let URL_PARAMS = {
    pageNumber: 1,
    period: 13,
    seasonOrProjection: 'SEASON_919_BY_PERIOD',
    timeframeTypeCode: 'BY_PERIOD',
    scoringCategoryType: 5,
    statsType: 1,
    view: 'STATS',
    teamId: '3tuj2hnpjyyvq496',
    adminMode: false,
    startDate: '2019-08-09',
    endDate: '2020-05-18',
    lineupChangeSystem: 'EASY_CLICK',
    daily: false,
    origDaily: false
}

export default async function fillTeamsData(page, teams) {
    console.log("Starting data collection");
    let teamsData = [];
    
    // Locate the Team Roster page
    await page.goto(constructTeamURL(URL_TEAM, URL_PARAMS)).then(async () => {
        teamsData[0] = await getTeamData(page, teams[0]);
    });

    
    
    
    console.log("Data for team nr 0 (" + teams[0].name + ") loaded");
/*
    // Cycle through all team pages and collect the data
    for (let i = 1; i < CONFIG.nrTeams; i++) {
        
        await page.waitForXPath('//*[@id="mat-select-0"]').then((result) => result.click());
        await page.waitForXPath('//*[@id="mat-option-' + i + '"]').then((result) => result.click());

        teamsData[i] = await getTeamData(page, teams[i]);
        console.log("Data for team nr " + i + " (" + teams[i].name + ") loaded");
    }
*/
    console.log("Finished data collection");
    return teamsData;
}

async function getTeamData(page, team) {
    let stats;

    await page.waitForResponse(response => response.url() === URL_TEAM_RESP && response.status() === 200 && response._request._postData.includes("getTeamRosterInfo")).then(
        (response) => response.json().then(
            (res) => {
                console.log(res.responses);
                stats = res.responses[0].data.tables
            }
        ));
        
    return { "stats": stats, "team": team };
}

function constructTeamURL(url, params) {
    let result = url;
    const keys = Object.keys(params);
    
    keys.forEach(element => {
        result = result.concat(element + "=" + params[element] + ";");
    });
    
    console.log("Team URL: " + result);

    return result;
}

