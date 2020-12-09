import { Meteor } from 'meteor/meteor';
import { updatePlayerStats } from '../db/player_stats';

export default function parseTeamsData(data) {
    const stats = data.stats;
    const team = data.team;
    
    let players = parseOutfielderData(stats[1].rows);
    players.push(parseGoalkeeperData(stats[0].rows));
            
    players.forEach((player, idx) => {
        players[idx].team = team;
        players[idx].gw = Meteor.settings.public.apiParams.round_id;
    })

    // Upsert data to database
    console.log("Updating players for team " + team.id + " (" + team.name + ")");
    //console.log(players);
    updatePlayerStats(players);

    return players;
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
                FPts:   parseFloat(data[i].cells[1].content) || 0,
                FPpG:   parseFloat(data[i].cells[2].content) || 0,
                GP:     parseFloat(data[i].cells[3].content) || 0,
                CS:     parseFloat(data[i].cells[4].content) || 0,
                GA:     parseFloat(data[i].cells[5].content) || 0,
                Sv:     parseFloat(data[i].cells[6].content) || 0,
                YC:     parseFloat(data[i].cells[7].content) || 0,
                PKS:    parseFloat(data[i].cells[8].content) || 0,
                KP:     parseFloat(data[i].cells[9].content) || 0,
                Int:    parseFloat(data[i].cells[10].content) || 0,
                CLR:    parseFloat(data[i].cells[11].content) || 0,
                AER:    parseFloat(data[i].cells[12].content) || 0,
                RC:     0,  // Red cards currently not included in dataset
            };
        }
    }

    return player;
}

function parseOutfielderData(data) {
    let players = [];

    //console.log(data);

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
            // If result is NaN then use 0 instead
            player.stats = {
                FPts:   parseFloat(data[i].cells[1].content) || 0,
                FPpG:   parseFloat(data[i].cells[2].content) || 0,
                GP:     parseFloat(data[i].cells[3].content) || 0,
                G:      parseFloat(data[i].cells[4].content) || 0,
                KP:     parseFloat(data[i].cells[5].content) || 0,
                AT:     parseFloat(data[i].cells[6].content) || 0,
                SOT:    parseFloat(data[i].cells[7].content) || 0,
                TkW:    parseFloat(data[i].cells[8].content) || 0,
                DIS:    parseFloat(data[i].cells[9].content) || 0,
                YC:     parseFloat(data[i].cells[10].content) || 0,
                SYC:    parseFloat(data[i].cells[11].content) || 0,
                RC:     parseFloat(data[i].cells[12].content) || 0,
                ACNC:   parseFloat(data[i].cells[13].content) || 0,
                Int:    parseFloat(data[i].cells[14].content) || 0,
                CLR:    parseFloat(data[i].cells[15].content) || 0,
                CoS:    parseFloat(data[i].cells[16].content) || 0,
                AER:    parseFloat(data[i].cells[17].content) || 0,
                HT:     parseFloat(data[i].cells[18].content) || 0,
                PKM:    parseFloat(data[i].cells[19].content) || 0,
                OG:     parseFloat(data[i].cells[20].content) || 0,
                GAO:    parseFloat(data[i].cells[21].content) || 0,
                CS:     parseFloat(data[i].cells[22].content) || 0,
            };

            players.push(player);
        }
    }

    return players;
}
