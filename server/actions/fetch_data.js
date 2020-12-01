const fetch = require('node-fetch');

function replaceAPIparams(str, mapObj) {
    return str.replace(/{fixture_id}|{player_id}|{round_id}|{comp_id}|{season_id}|{team_id}/gi, function(matched){
        return mapObj[matched.replace(/[{}]/g,"")];
    });
}

export default async function fetchAPIData(str, mapObj) {
    let result;
    const url = replaceAPIparams(str, mapObj);
    const headers = new fetch.Headers({
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "et-EE,et;q=0.9,en-US;q=0.8,en;q=0.7",
        "Content-Type": "application/json",
        "User-Agent": "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36 Edg/87.0.664.47"
        
    });

    console.log("Fetching data from: " + url);

    await fetch(url, {
        method  : 'GET', 
        headers : headers 
    }).then(async (response) => {
        await response.json().then(
            res => result = res); 
    });

    return result;
}