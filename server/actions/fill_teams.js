import { Meteor } from 'meteor/meteor';
import parseTeamsData from '../parser/parse_teams_data';

const CONFIG = require('../config/config');

export default async function fillLeagueTeamsData(page, teams) {
    const nrTeams = teams.length;
    console.log("Number of teams: " + nrTeams);

    const result = [];
    
    for(let i = 0; i < nrTeams; i++) {
        await fillTeamsData(page, teams[i]).then((data)=>{
            console.log(data);
            result.push(data);
        });
    }
    
    return result;
}

async function fillTeamsData(page, team) {
    console.log("Fill teams data started:");
    console.log(team);

    return page.goto(constructTeamURL(team))
        .then(() => {
            return page.waitForResponse(response => response.url() === CONFIG.URL_TEAM_RESP 
                            && response.status() === 200 
                            && response._request._postData.includes("getTeamRosterInfo"))
                .then( response => {
                    console.log("Parsing response for team: " + team.id);
                    return parseResponse(response, team);
                })
                .catch( reason => {
                    console.error("Error! WaitForResponse for " + team.id + " failed! " + reason);
                });
        }).catch(reason => {
            console.error('Error! Promise rejected! Reason: ' + reason);
        });    
}

function constructTeamURL(team) {
    let result = CONFIG.URL_TEAM;
    let params = CONFIG.URL_PARAMS;

    params.teamId = team.fId;
    params.period = Meteor.settings.public.apiParams.round_id;

    const keys = Object.keys(params);
    
    keys.forEach(element => {
        result = result.concat(element + "=" + params[element] + ";");
    });
    
    console.log("Team URL: " + result);

    return result;
}

async function parseResponse(response, team) {
    return response.json()
        .then(res => { 
             return parseTeamsData({ "stats": res.responses[0].data.tables, "team": team });
        })
        .catch(reason => {
            console.error('Error! ParseResponse failed! Reason: ' + reason);
        });
}
