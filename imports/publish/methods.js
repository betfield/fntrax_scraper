const fetch = require('node-fetch');
const CONFIG = require('../config/config');

Meteor.methods({
    getServerTime: function () {
        return (new Date).toTimeString();
    }
});

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