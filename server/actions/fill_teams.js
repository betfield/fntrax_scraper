import parseTeamsData from '../parser/parse_teams_data';

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

export default async function fillTeamsData(page, team) {
    return await page.goto(constructTeamURL(team)).then(async () => {
        const teamData = await getTeamData(page, team);
        parseTeamsData(teamData);
        console.log("Data for team nr " + team.id + " (" + team.name + ") loaded");
    });    
}

async function getTeamData(page, team) {
    return page.waitForResponse(response => response.url() === URL_TEAM_RESP 
                            && response.status() === 200 
                            && response._request._postData.includes("getTeamRosterInfo"))
        .then(response => response.json()
            .then(res => { 
                return { "stats": res.responses[0].data.tables, "team": team }
            })
        );
}

function constructTeamURL(team) {
    let result = URL_TEAM;
    let params = URL_PARAMS;

    const keys = Object.keys(params);
    
    keys.forEach(element => {
        result = result.concat(element + "=" + params[element] + ";");
    });
    
    console.log("Team URL: " + result);

    return result;
}

