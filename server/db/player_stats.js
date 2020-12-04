import { PlayerStats } from '../../imports/collections';

function updatePlayerStats(data) {

    console.log("Updating player stats for fixture: " + data.fixtureId);

    PlayerStats.upsert({
        "id": data.fixtureId
    },{
        $set: data
    });

    console.log("Finished player stats update for fixture: " + data.fixtureId);
}

function clearPlayerStats() {

    PlayerStats.remove({});
    console.log("Player stats table cleared!");
}

export { updatePlayerStats, clearPlayerStats }