import { PlayerStats } from '../../imports/collections';

function updatePlayerStats(data) {

    const diff = timeOffset;
    const team = data[0].team;
    const rand = Math.floor(Math.random() * 100) + 1;

    console.log("Scheduling player stats update for team nr " + team.id + " (" + team.name + "), time offset: " + diff + ". Rand: " + rand);

    Meteor.setTimeout(() => {
        
        for (let i = 0; i < data.length; i++) {
            const player = data[i];
            player.update = {
                TS: new Date(),
                rand: rand
            }

            PlayerStats.upsert({
                "id": player.id
            },{
                $set: player
            });
        }

        console.log("Data for team nr " + team.id + " (" + team.name + ") loaded. Rand: " + rand);

    }, diff);
}

function clearPlayerStats() {

    PlayerStats.remove({});
    console.log("Player stats table cleared!");
}

export { updatePlayerStats, clearPlayerStats }