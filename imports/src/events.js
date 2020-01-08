const HEADERS = require('../config/headers');

function getEventMessage(update) {
    let options = {};

    switch(update) {
        case "G":
            options = {
                type: "primary", 
                icon: "tim-icons icon-trophy", 
                message: "Goal!"
            }
            break;
        case "AT":
            options = {
                type: "primary", 
                icon: "tim-icons icon-trophy", 
                message: "Assist!"
            }
            break;
        case "SOT":
            options = {
                type: "success", 
                icon: "tim-icons icon-trophy", 
                message: "Shot on Target!"
            }
            break;
        case "KP":
            options = {
                type: "success", 
                icon: "tim-icons icon-trophy", 
                message: "Key pass!"
            }
            break;
        case "TkW":
            options = {
                type: "info", 
                icon: "tim-icons icon-trophy", 
                message: "Tackle won!"
            }
            break;
        case "ACNC":
            options = {
                type: "info", 
                icon: "tim-icons icon-trophy", 
                message: "Successful cross!"
            }
            break;
        case "Int":
            options = {
                type: "info", 
                icon: "tim-icons icon-trophy", 
                message: "Interception!"
            }
            break;
        case "CLR":
            options = {
                type: "info", 
                icon: "tim-icons icon-trophy", 
                message: "Clearance!"
            }
            break;
        case "AER":
            options = {
                type: "info", 
                icon: "tim-icons icon-trophy", 
                message: "Aeral duel won!"
            }
            break;
        case "CoS":
            options = {
                type: "info", 
                icon: "tim-icons icon-trophy", 
                message: "Successful dribble!"
            }
            break;
        case "DIS":
            options = {
                type: "warning", 
                icon: "tim-icons icon-trophy", 
                message: "Disposessed!"
            }
            break;
        case "GA":
            options = {
                type: "warning", 
                icon: "tim-icons icon-trophy", 
                message: "Goal allowed!"
            }
            break;
        case "GAO":
            options = {
                type: "warning", 
                icon: "tim-icons icon-trophy", 
                message: "Goal allowed!"
            }
            break;
        case "YC":
            options = {
                type: "warning", 
                icon: "tim-icons icon-trophy", 
                message: "Yellow card!"
            }
            break;
        case "SYC":
            options = {
                type: "danger", 
                icon: "tim-icons icon-trophy", 
                message: "Second yellow card!"
            }
            break;
        case "RC":
            options = {
                type: "danger", 
                icon: "tim-icons icon-trophy", 
                message: "Red card!"
            }
            break;
        case "PKM":
            options = {
                type: "danger", 
                icon: "tim-icons icon-trophy", 
                message: "Penalty missed!"
            }
            break;
        case "OG":
            options = {
                type: "danger", 
                icon: "tim-icons icon-trophy", 
                message: "Own goal!"
            }
            break;
        case "PKS":
            options = {
                type: "primary", 
                icon: "tim-icons icon-trophy", 
                message: "Penalty saved!"
            }
            break;
        case "Sv":
            options = {
                type: "success", 
                icon: "tim-icons icon-trophy", 
                message: "Save!"
            }
            break;
        case "CS":
            options = {
                type: "primary", 
                icon: "tim-icons icon-trophy", 
                message: "Clean sheet!"
            }
            break;
        default:
            break;
    }

    return options;
}

function getPlayerStatsUpdates(players) {
    let result = [];

    for (let i = 0; i < players.length; i++) {
        const currPlayer = players[i].curr;
        const prevPlayer = players[i].prev;

        if (prevPlayer !== undefined && currPlayer !== undefined) {
            let res = comparePlayerStats(currPlayer.name, currPlayer.stats, prevPlayer.stats);
            
            for (let j = 0; j < res.length; j++) {
                result.push(res[j]);
            }
        }
    };

    return result;
}

function comparePlayerStats(player, curr, prev) {

    const headers = HEADERS.playerStatsHeadersFull;    
    let result = [];

        for (let i=0; i < headers.length; i++) {
            let header = headers[i];
            let res = {
                player: player,
                update: header,
                diff: curr[header] - prev[header],
                correction: false
            }
            
            if (res.diff < 0) {
                res.correction = true;
                result.push(res);
            } else if (res.diff > 0) {
                result.push(res);
            } else {
                // No changes
            }

        };

    return result;
}

function getUpdates(curr, prev) {
    let result = [];
    
    for (let iter = 0; iter < curr.OF.length; iter++) {
        const currPlayer = curr.OF[iter];
        const prevPlayer = prev.OF.find(obj => obj.id === currPlayer.id);
        
        if (JSON.stringify(currPlayer) !== JSON.stringify(prevPlayer)) {
            let obj = {
                curr: currPlayer,
                prev: prevPlayer
            }
            result.push(obj);
        }
    };

    for (let iter = 0; iter < curr.GK.length; iter++) {
        const currPlayer = curr.GK[iter];
        const prevPlayer = prev.GK.find(obj => obj.id === currPlayer.id);
        
        if (JSON.stringify(currPlayer) !== JSON.stringify(prevPlayer)) {
            let obj = {
                curr: currPlayer,
                prev: prevPlayer
            }
            result.push(obj);
        }
    };
    
    return getPlayerStatsUpdates(result);
}

export { getEventMessage, getUpdates }