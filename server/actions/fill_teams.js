import parseTeamsData from '../parser/parse_teams_data';

const URL_TEAM = 'https://www.fantrax.com/fantasy/league/fme67lofjyyvq48x/team/roster;';
const URL_TEAM_RESP = 'https://www.fantrax.com/fxpa/req?leagueId=fme67lofjyyvq48x';

let URL_PARAMS = {
    pageNumber: 1,
    period: Meteor.settings.public.gameWeek,
    seasonOrProjection: 'SEASON_919_BY_PERIOD',
    timeframeTypeCode: 'BY_PERIOD',
    scoringCategoryType: 5,
    statsType: 1,
    view: 'STATS',
    adminMode: false,
    startDate: '2019-08-09',
    endDate: '2020-05-18',
    lineupChangeSystem: 'EASY_CLICK',
    daily: false,
    origDaily: false
}

export default fillTeamsData = (page, team) => {
    return page.goto(constructTeamURL(team))
        .then(() => {
            page.waitForResponse(response => response.url() === URL_TEAM_RESP 
                            && response.status() === 200 
                            && response._request._postData.includes("getTeamRosterInfo"))
                .then( response => {
                    parseResponse(response, team);
                    restartFillTeamsData(page, team);
                });
        }).catch(reason => {
            console.error('Error! Promise rejected! Reason: ' + reason);
            restartFillTeamsData(page, team);
        });    
}

function restartFillTeamsData(page, team) {
    if (TIMER) {
        fillTeamsData(page, team);
    }
}

function constructTeamURL(team) {
    let result = URL_TEAM;
    let params = URL_PARAMS;

    params.teamId = team.fId;

    const keys = Object.keys(params);
    
    keys.forEach(element => {
        result = result.concat(element + "=" + params[element] + ";");
    });
    
    console.log("Team URL: " + result);

    return result;
}

function parseResponse(response, team) {
    return response.json()
        .then(res => { 
            parseTeamsData({ "stats": res.responses[0].data.tables, "team": team });
        })
        .catch(reason => {
            console.error('Error! Promise rejected! Reason: ' + reason);
        })
}
