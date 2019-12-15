import { PlayerStats } from '../../imports/collections';

function updatePlayerStats(data) {

    const diff = timeOffset;
    const team = data[0].team;
    console.log("Scheduling player stats update for team nr " + team.id + " (" + team.name + "), time offset: " + diff);

    Meteor.setTimeout(() => {
        data.forEach(player => {
            PlayerStats.upsert({
                "id": player.id
            },{
                $set: player
            });
        });
    }, diff);
}

export { updatePlayerStats }