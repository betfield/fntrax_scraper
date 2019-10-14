import { PlayerStats } from '../lib/collections';

function parseTeamsData(data) {

    for (let i = 0; i < data.length; i++) {
        let playerData = {
            team:   i,
            GK:     parseGoalkeeperData(data[i][0].rows),
            OF:     parseOutfielderData(data[i][1].rows)
        }

        // Upsert data to database
        updatePlayerStats(i, playerData);
    }
}

function parseGoalkeeperData(data) {
    let player = {};

    for (let i = 0; i < data.length; i++) {
        //Check if player status is active (not reserve)
        if (('statusId' in data[i]) && (data[i].statusId === '1') && 
            //... and check whether slot has player available
            ('scorer' in data[i])) {

            // Add player id
            player.id = data[i].scorer.scorerId;

            // Add player position
            player.pos = data[i].scorer.posShortNames;

            // Add player name
            player.name = data[i].scorer.name;

            // Add player club
            player.club = data[i].scorer.teamShortName;

            // Add player stats
            player.stats = {
                FPts:   parseInt(data[i].cells[1].content),
                FPpG:   parseInt(data[i].cells[2].content),
                GP:     parseInt(data[i].cells[3].content),
                CS:     parseInt(data[i].cells[4].content),
                GA:     parseInt(data[i].cells[5].content),
                Sv:     parseInt(data[i].cells[6].content),
                YC:     parseInt(data[i].cells[7].content),
                PKS:    parseInt(data[i].cells[8].content),
                KP:     parseInt(data[i].cells[9].content),
                Int:    parseInt(data[i].cells[10].content),
                CLR:    parseInt(data[i].cells[11].content),
                AER:    parseInt(data[i].cells[12].content),
                RC:     0,  // Red cards currently not included in dataset
            };
        }
    }

    return player;
}

function parseOutfielderData(data) {
    let players = [];

    for (let i = 0; i < data.length; i++) {
        //Check if player status is active (not reserve)
        if (('statusId' in data[i]) && (data[i].statusId === '1') && 
            //... and check whether slot has player available
            ('scorer' in data[i])) {
        
            let player = {};
            
            // Add player id
            player.id = data[i].scorer.scorerId;

            // Add player position
            player.pos = data[i].scorer.posShortNames;

            // Add player name
            player.name = data[i].scorer.name;

            // Add player club
            player.club = data[i].scorer.teamShortName;

            // Add player stats
            player.stats = {
                FPts:   parseInt(data[i].cells[1].content),
                FPpG:   parseInt(data[i].cells[2].content),
                GP:     parseInt(data[i].cells[3].content),
                G:      parseInt(data[i].cells[4].content),
                KP:     parseInt(data[i].cells[5].content),
                AT:     parseInt(data[i].cells[6].content),
                SOT:    parseInt(data[i].cells[7].content),
                TkW:    parseInt(data[i].cells[8].content),
                DIS:    parseInt(data[i].cells[9].content),
                YC:     parseInt(data[i].cells[10].content),
                SYC:    parseInt(data[i].cells[11].content),
                RC:     parseInt(data[i].cells[12].content),
                ACNC:   parseInt(data[i].cells[13].content),
                Int:    parseInt(data[i].cells[14].content),
                CLR:    parseInt(data[i].cells[15].content),
                CoS:    parseInt(data[i].cells[16].content),
                AER:    parseInt(data[i].cells[17].content),
                HT:     parseInt(data[i].cells[18].content),
                PKM:    parseInt(data[i].cells[19].content),
                OG:     parseInt(data[i].cells[20].content),
                GAO:    parseInt(data[i].cells[21].content),
                CS:     parseInt(data[i].cells[22].content)
            };

            players.push(player);
        }
    }

    return players;
}

function updatePlayerStats(team, data) {
    PlayerStats.upsert({
        "team": team
    },{
        $set: {
        "team": data.team,
        "GK":   data.GK,
        "OF":   data.OF
        }
    });
}

export { parseTeamsData }