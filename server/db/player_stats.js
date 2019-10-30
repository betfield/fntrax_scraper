import { PlayerStats } from '../../imports/collections';

function updatePlayerStats(data) {

    data.forEach(player => {
        PlayerStats.upsert({
            "id": player.id
        },{
            $set: player
        });
    });

}

export { updatePlayerStats }