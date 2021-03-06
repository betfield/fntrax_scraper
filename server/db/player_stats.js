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
            //console.log(stats);
        }
    }

    console.log("Player data for club " + club + " updated from fixture.");
}

function updateFixturePlayerStatsAlternative(clubPlayers) {
    
    for (let i = 0; i < clubPlayers.length; i++) {
        const player = clubPlayers[i];
        
        if (player !== undefined) {
            const playerOld = PlayerStats.findOne({"id": player.id});

            if (playerOld !== undefined && comparePlayerStats(playerOld.statsRaw, player.statsRaw)) {
                console.log("No data to update for player: " + player.name + "(" + player.id + ")");
            } else {
                player.update = {
                    TS: new Date()
                }
                
                PlayerStats.upsert({
                    "id": player.id
                },{
                    $set: player
                });
                console.log("Player data updated for player: " + player.name + "(" + player.id + ")");
            }
        }
    }
}

function comparePlayerStats(playerOld, playerNew) {
    const keys1 = Object.keys(playerOld);
    const keys2 = Object.keys(playerNew);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (playerOld[key] !== playerNew[key]) {
        return false;
      }
    }
    return true;
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

export { updatePlayerStats, updateFixturePlayerStats, clearPlayerStats, updateFixturePlayerStatsAlternative }