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

function updateFixturePlayerStats(club, clubPlayers) {
    const teamPlayerStats = getTeamPlayerStatsPerClub(club);
    const diff = timeOffset;
    
    Meteor.setTimeout(() => {

        for (let i = 0; i < teamPlayerStats.length; i++) {
            const player = teamPlayerStats[i];
            const playerDataForUpdate = findTeamPlayerFromClubStats(teamPlayerStats[i], clubPlayers);
            
            if (playerDataForUpdate !== undefined) {
                const stats = new Map(Object.entries(playerDataForUpdate.stats));

                player.update = {
                    TS: new Date()
                }
                
                stats.forEach((value, key, map) => {
                    player.stats[key] = value;
                })

                PlayerStats.upsert({
                    "id": player.id
                },{
                    $set: player
                });
                console.log("Player data updated for player: " + player.name + "(" + player.id + ")");
                console.log(stats);
            }
        }
    }, diff);

    console.log("Player data for club " + club + " updated from fixture.");
}

function clearPlayerStats() {

    PlayerStats.remove({});
    console.log("Player stats table cleared!");
}

function getTeamPlayerStatsPerClub(club) {
    return PlayerStats.find({"club": club}).fetch();
}

function findTeamPlayerFromClubStats(playerStats, clubPlayers) {
    for (let i = 0; i < clubPlayers.length; i++) {    
        if (clubPlayers[i].name === playerStats.name) {
            return clubPlayers[i];
        }
    }
}

export { updatePlayerStats, updateFixturePlayerStats, clearPlayerStats }