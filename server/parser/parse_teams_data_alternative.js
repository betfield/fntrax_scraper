import { updatePlayerStats } from '../db/player_stats';

export default function parseTeamsData(data, team, fixtureId) {
    console.log("Parse teams data for: ");
    const players = data.players;
    const result = [];

    players.forEach((playerItem) => {
        const player = {};

        // Add fixture id
        player.fixtureId = fixtureId;

        // Add player club
        player.club = team.nameCode;
        
        // Add player id
        player.id = playerItem.player.id;

        // Add player position
        player.pos = playerItem.position;

        // Add player name
        player.name = playerItem.player.name;

        // Gather player stats
        let stats = parsePlayerStats(playerItem.statistics);
        Object.assign(stats, getPlayerCards(playerItem.player.id));
        Object.assign(stats, getPlayerGoalsAllowed(playerItem.player.id));
        
        // Calculate points based on player stats
        player.stats = calculatePlayerFantasyPoints(player.pos, stats);

        // Assign player total points
        player.stats.FPts = playerTotalPoints(player.stats);

        result.push(player);
    })

    return result;
}

function parsePlayerStats(stats) {
    // Return player stats
    // If result is NaN then use 0 instead
    return {
        G:      parseFloat(stats.goals) || 0,
        KP:     parseFloat(stats.keyPass) || 0,
        AT:     parseFloat(stats.goalAssist) || 0,
        SOT:    parseFloat(stats.onTargetScoringAttempt) || 0,
        // Includes unsuccessful tackles (I think)
        TkW:    parseFloat(stats.totalTackle) || 0,
        DIS:    parseFloat(stats.dispossessed) || 0,
        // Includes corners as well (I think)
        ACNC:   parseFloat(stats.accurateCross) || 0,
        Int:    parseFloat(stats.interceptionWon) || 0,
        CLR:    parseFloat(stats.totalClearance) || 0,
        CoS:    parseFloat(stats.wonContest) || 0,
        AER:    parseFloat(stats.aerialWon) || 0,
        PKM:    parseFloat(stats.penaltyMiss) || 0,
        OG:     parseFloat(stats.ownGoals) || 0,
        Min:    parseFloat(stats.minutesPlayed) || 0,
        HT:     Math.floor(stats.goals/3) || 0,
        PKS:    parseFloat(stats.penaltySave) || 0,
        Sv:     parseFloat(stats.saves) || 0,
    };
}

function getPlayerCards(playerId) {
    // TODO: add logic to calclulate cards
    return {
        YC:     0,
        SYC:    0,
        RC:     0
    }
};

function getPlayerGoalsAllowed(playerId) {
    // TODO: add logic to calclulate allowed goals
    return {
        GAO:    0,
        CS:     0
    }
};

function calculatePlayerFantasyPoints(pos, stats) {
    // TODO: add logic to calclulate points for GK and OF
    return stats;
}

function playerTotalPoints(stats) {
    // TODO: add logic to calclulate total points
    return 55;
}