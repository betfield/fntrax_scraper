import { getFixture } from '../db/fixtures';

const SCORING = require('../config/fantrax_scring');

export default function parseTeamsData(lineups, team, fixtureId, isHome) {
    const players = lineups.players;
    const fixture = getFixture(fixtureId)[0];
    const result = [];

    console.log("Parse player stats for team: " + team.nameCode);

    let incidents = [];
    let goals = [];
    let substitutions = [];

    if (fixture.incidents !== undefined) {
        incidents = fixture.incidents;
        goals = getFixtureGoals(incidents, isHome);
        substitutions = getFixtureSubstitutions(incidents, isHome);
    } 

    const playerStartEndTime = getPlayerStartEndTime(players, substitutions);

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
        Object.assign(stats, getPlayerGoalsAllowed(playerItem.player, playerStartEndTime, goals));
        
        // Add player stats (raw)
        player.statsRaw = stats;

        // Calculate points based on player stats
        player.stats = calculatePlayerFantasyPoints(player.pos, stats);

        // Assign player total points
        player.stats.FPts = playerTotalPoints(player.stats);

        result.push(player);
    })

    console.log("Done!");
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

function getFixtureGoals(incidents, isHome) {
    const result = [];

    incidents.forEach(incident => {
        if (incident.incidentType === "goal" && incident.isHome === !isHome) {
            result.push(incident);
        }
    })

    return result;
};

function getFixtureSubstitutions(incidents, isHome) {
    const result = [];

    incidents.forEach(incident => {
        if (incident.incidentType === "substitution" && incident.isHome === isHome) {
            result.push(incident);
        }
    })

    return result;
};

function getPlayerGoalsAllowed(player, startEndTimes, goals) {
    let goalsAllowed = 0;
    let cleanSheet = 0;

    const playerStartEndTime = startEndTimes.find(o => o.id === player.id);
    
    if (playerStartEndTime !== undefined) {
        goals.forEach(goal => {
            let addedTime = 0;

            if (goal.addedTime !== undefined) {
                addedTime = goal.addedTime;
            }

            let time = goal.time + addedTime;

            if (time > playerStartEndTime.startMin && time <= playerStartEndTime.endMin) {
                goalsAllowed++;
            }
        })
    }

    if (goalsAllowed = 0 && (playerStartEndTime.endMin - playerStartEndTime.startMin) >= 60) {
        cleanSheet = 1;
    }

    return {
        GAO:    goalsAllowed,
        CS:     cleanSheet
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

// TODO: Add additional time on top of 90 for end time
function getPlayerStartEndTime(players, substitutions) {
    const result = [];

    players.forEach(player => {
        let startMin = 0;
        let endMin = 0;

        if (player.substitute) {
            substitutions.forEach(sub => {
                if (player.player.id === sub.playerIn.id) {
                    let addedTime = 0;

                    if (sub.addedTime !== undefined) {
                        addedTime = sub.addedTime;
                    }

                    startMin = sub.time + addedTime;
                    endMin = startMin + player.statistics.minutesPlayed;
                }
            });
        } else {
            startMin = 0;
            endMin = player.statistics.minutesPlayed;
        }

        // Only add player to the result in case played more than 0 minutes
        if (endMin > 0) {
            result.push({
                id: player.player.id,
                startMin: startMin,
                endMin: endMin
            });
        }
    });

    return result;
}