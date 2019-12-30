import { updateTeams } from '../db/teams';

const URL_TEAM = 'https://www.fantrax.com/fantasy/league/fme67lofjyyvq48x/team/roster;';
const URL_TEAM_RESP = 'https://www.fantrax.com/fxpa/req?leagueId=fme67lofjyyvq48x';

export default async function populateTeamsData(page) {
    console.log("Starting to populate teams data");
    
    // Locate the league page
    await page.goto(URL_TEAM);

    // Get fantasyTeams object from league page
    const fantasyTeams = await getFantasyTeams(page);
    
    let teams = [];

    // Iterate over fantasyTeams array and construct teams
    for (let i = 0; i < fantasyTeams.length; i++) {
        const team = fantasyTeams[i];

        teams.push({
            "name": team.name,
            "manager": team.shortName,
            "logo": team.logoUrl512,
            "fId": team.id,
            "id": i
        });
    }

    // Save teams into database
    console.log("Saving teams info to database");
    updateTeams(teams);

    console.log("Finished populating teams data");
}

// Function to return response data from the league URL containing an array with all fantasyTeams
async function getFantasyTeams(page) {
    return page.waitForResponse(response => response.url() === URL_TEAM_RESP 
                            && response.status() === 200 
                            && response._request._postData.includes("getTeamRosterInfo"))
        .then(response => response.json()
            .then(res => { 
                // "gameweeks": res.responses[0].data.displayedLists.periodList
                return res.responses[0].data.fantasyTeams;
            })
        );
}