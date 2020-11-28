import parseTeamsData from '../parser/parse_teams_data';
import { getCurrentGameWeek } from '../main';

const fetch = require('node-fetch');
const CONFIG = require('../config/config');

export default async function startFillTeamsDataAlternative(pages, teams) {        

    
   /* await fetch(CONFIG.URL_SOFASCORE_TEAM_INFO.replace("{team_id}",3)).then(async (response) => {
        await response.json().then(res => console.log(res)); 
    });
    
    await fetch(CONFIG.URL_SOFASCORE_TEAM_INFO.replace("{team_id}",3)).then(async (response) => {
        await response.text().then(res => console.log(res)); 
    });

*/

    fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_PLAYER_STATS, Meteor.settings.public.apiMap);
   /* fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
    fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_INFO, mapObj);
    fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURES, mapObj);
    fetchAPIData(CONFIG.URL_SOFASCORE_GAMEWEEKS, mapObj);
    fetchAPIData(CONFIG.URL_SOFASCORE_TEAM_PLAYERS, mapObj);
    fetchAPIData(CONFIG.URL_SOFASCORE_TEAM_INFO, mapObj);
    fetchAPIData(CONFIG.URL_SOFASCORE_TEAMS, mapObj);
    fetchAPIData(CONFIG.URL_SOFASCORE_SEASONS, mapObj);
*/
   
    
}

function replaceAPIparams(str, mapObj) {
    return str.replace(/{fixture_id}|{player_id}|{round_id}|{comp_id}|{season_id}|{team_id}/gi, function(matched){
        return mapObj[matched.replace(/[{}]/g,"")];
    });
}

async function fetchAPIData(str, mapObj) {
    const url = replaceAPIparams(str, mapObj);
    console.log("Fetching data from: " + url);

    await fetch(url).then(async (response) => {
        await response.json().then(res => console.log(res)); 
    });
}