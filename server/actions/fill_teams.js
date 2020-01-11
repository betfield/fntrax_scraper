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

export default function startFillTeamsData(pages, teams) {
    const nrTeams = teams.length;
    const nrPages = pages.length;

    console.log("Number of teams: " + nrTeams);
    console.log("Number of pages: " + nrPages);

    let teamsForPage = [];
    
    // Iterate over all open pages
    for (let i = 0; i < nrPages; i++) {
        console.log("Iterating Page nr: " + i);
        // Iterate over all teams to select team numbers for specific page    
        for(let j = 0; j < nrTeams; j++) {
            console.log("Iterating Team nr: " + j);
            console.log(j % nrPages);
            // If the modal of the team nr and page nr is 0 then add this team to the respective page
            if (j % nrPages === i) {
                teamsForPage.push(teams[j]);
            }
        }
        
        restartFillTeamsData(pages[i], teamsForPage, 0);

        teamsForPage = [];
    }
}

function fillTeamsData(page, teams, iter) {
    console.log("Fill teams data started, iterator:" + iter);
    console.log(teams);
    const team = teams[iter];

    return page.goto(constructTeamURL(team))
        .then(() => {
            page.waitForResponse(response => response.url() === URL_TEAM_RESP 
                            && response.status() === 200 
                            && response._request._postData.includes("getTeamRosterInfo"))
                .then( response => {
                    console.log("Parsing response for team: " + team.id);
                    parseResponse(response, team);
                })
                .catch( reason => {
                    console.error("Error! WaitForResponse for " + team.id + " failed! " + reason);
                })
                .finally( () => {
                    console.log("Finally block, restarting fill teams");
                    restartFillTeamsData(page, teams, ++iter);
                });
        }).catch(reason => {
            console.error('Error! Promise rejected! Reason: ' + reason);
            //restartFillTeamsData(page, teams, ++iter);
        });    
}

function restartFillTeamsData(page, teams, iter) {
    console.log("Restart fill teams, iterator:" + iter);
    // Restart teams iterator from 0 if max length achieved
    if (iter >= teams.length) {
        iter = 0;
    }

    if (TIMER) {
        fillTeamsData(page, teams, iter);
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
            console.error('Error! ParseResponse failed! Reason: ' + reason);
        });
}
