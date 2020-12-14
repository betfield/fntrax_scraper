import { getFixture } from '../db/fixtures';

const SCORING = require('../config/fantrax_scring');

export default function parseTeamsData(data, team, fixtureId) {
    console.log("Parse player stats for team: " + team.nameCode);
    
    const players = data.players;
    const result = [];

    const incidents = getFixture(fixtureId)[0].incidents;
    const goals = getFixtureGoals(incidents);

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
        Object.assign(stats, getPlayerCards(playerItem.player, incidents));
        Object.assign(stats, getPlayerGoalsAllowed(playerItem.player, goals));
        
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

function getPlayerCards(player, incidents) {
    let YC = 0;
    let SYC = 0;
    let RC = 0;

    incidents.forEach(incident => {
        if (incident.player !== undefined && incident.player.id === player.id) {
            if (incident.incidentType === "card") {
                if (incident.incidentClass === "yellow") YC++;
                if (incident.incidentClass === "yellowRed") SYC++;
                if (incident.incidentClass === "red") RC++;
            }
        }
    })

    return {
        YC:     YC,
        SYC:    SYC,
        RC:     RC
    }
};

function getFixtureGoals(incidents) {
    const result = [];

    incidents.forEach(incident => {
        if (incident.incidentType === "goal") {
            result.push(incident);

            console.log("Goal:");
            console.log(incident);
        }
    })

    return result;
};

function getPlayerGoalsAllowed(player, goals) {
    let GAO = 0;
    let CS = 0;

    // Check when player entered game
    // Check when player exited game
    // Calculate how many goals were scored during this period

    goals.forEach(goal => {
        
    })

    return {
        GAO:    0,
        CS:     0
    }
};

function calculatePlayerFantasyPoints(pos, stats) {
    let result = {};

    // Iterate over map based on player position and generate fantasy scores
    SCORING.FANTRAX_SCORING[pos].forEach((value, key, map) => { 
        result[key] = parseFloat(stats[key] * value);
    });

    return result;
}

function playerTotalPoints(stats) {
    let result = 0;
    const m = new Map(Object.entries(stats));

    m.forEach((value, key, map) => {
        result += value;
    });

    return result;
}