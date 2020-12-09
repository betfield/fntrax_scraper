import { PlayerStats } from '../../imports/collections';

function updatePlayerStats(data) {

    const team = data[0].team;

    for (let i = 0; i < data.length; i++) {
        const player = data[i];
        player.update = {
            TS: new Date()
        }

        PlayerStats.upsert({
            "id": player.id
        },{
            $set: player
        });
    }

    console.log("Player data for team nr " + team.id + " (" + team.name + ") loaded.");
}

function clearPlayerStats() {

    PlayerStats.remove({});
    console.log("Player stats table cleared!");
}

export { updatePlayerStats, clearPlayerStats }