import { Teams } from '../../imports/collections';

function getAllTeams() {
    return Teams.find().fetch();
}

function updateTeams(teams) {
    console.log("Updating teams:");

    teams.forEach(team => {
        console.log(team);

        Teams.upsert({
            "fId": team.fId
        },{
            $set: team
        });
    })
}

export { updateTeams, getAllTeams }