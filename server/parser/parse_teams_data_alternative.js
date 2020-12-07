import { updatePlayerStats } from '../db/player_stats';

export default function parseTeamsData(data, team, fixtureId) {
    console.log("Parse teams data for: ");
    const players = data.players;

    console.log(players);
    console.log(players[0]);

    players.forEach((playerItem, idx) => {
        // Add fixture id
        players[idx].fixtureId = fixtureId;

        // Add player club
        players[idx].club = fixture.nameCode;

        // Add player id
        players[idx].id = playerItem.player.id;

        // Add player position
        players[idx].pos = playerItem.position;

        // Add player name
        players[idx].name = playerItem.player.name;

        // Add player stats
        players[idx].stats = parseOutfielderData(playerItem.statistics);
    })

    //let players = parseOutfielderData(stats[1].rows);
    ///players.push(parseGoalkeeperData(stats[0].rows));
    
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

function parseOutfielderData(stats) {
    // Return player stats
    // If result is NaN then use 0 instead
    return {
        FPts:   parseFloat(stats[i].cells[1].content) || 0,
        G:      parseFloat(stats.goals) || 0,
        KP:     parseFloat(stats.keyPass) || 0,
        AT:     parseFloat(stats.goalAssist) || 0,
        SOT:    parseFloat(stats.onTargetScoringAttempt) || 0,
        // Includes unsuccessful tackles (I think)
        TkW:    parseFloat(stats.totalTackle) || 0,
        DIS:    parseFloat(stats.dispossessed) || 0,
        YC:     parseFloat(stats[i].cells[10].content) || 0,
        SYC:    parseFloat(stats[i].cells[11].content) || 0,
        RC:     parseFloat(stats[i].cells[12].content) || 0,
        // Includes corners as well (I think)
        ACNC:   parseFloat(stats.accurateCross) || 0,
        Int:    parseFloat(stats.interceptionWon) || 0,
        CLR:    parseFloat(stats.totalClearance) || 0,
        CoS:    parseFloat(stats.wonContest) || 0,
        AER:    parseFloat(stats.aerialWon) || 0,
        HT:     parseFloat(stats[i].cells[18].content) || 0,
        PKM:    parseFloat(stats[i].cells[19].content) || 0,
        OG:     parseFloat(stats[i].cells[20].content) || 0,
        GAO:    parseFloat(stats[i].cells[21].content) || 0,
        CS:     parseFloat(stats[i].cells[22].content) || 0,
        Min:    parseFloat(stats.minutesPlayed) || 0
    };
}
