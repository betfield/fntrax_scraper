import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Match from './Match';
import PlayersTable from './PlayersTable';
import { PlayerStats, Fixtures } from '../collections';

const CONFIG = require('../config/config');

export default class PlayersContainer extends TrackerReact(React.Component) {

    render () {

        const subPlayerStats = Meteor.subscribe("playerstats");
        let subCurrentFixture;
        
        if (CONFIG.testMode) {
            subCurrentFixture = Meteor.subscribe("testcurrentfixture");
        } else {
            subCurrentFixture = Meteor.subscribe("currentfixture");
        }

        if (subCurrentFixture.ready() && subPlayerStats.ready()) {
            const playerStats = PlayerStats.find({}).fetch();
            const currentFixture = Fixtures.findOne({});
            
            const homeOF = getClubPlayers(currentFixture.homeShort, playerStats, false);
            const awayOF = getClubPlayers(currentFixture.awayShort, playerStats, false);
            const homeGK = getClubPlayers(currentFixture.homeShort, playerStats, true);
            const awayGK = getClubPlayers(currentFixture.homeShort, playerStats, true);

            return (
                <div>
                <Match fixture={currentFixture}/>
                <br/>
                <PlayersTable players={homeOF} type={"OF"}/>
                <br/>
                <PlayersTable players={homeGK} type={"GK"}/>
                <br/>
                <PlayersTable players={awayOF} type={"OF"}/>
                <br/>
                <PlayersTable players={awayGK} type={"GK"}/>
                </div>
            );
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }
}

function getClubPlayers(club, playerStats, isGK) {
    let result = [];
    let condition = false;

    if (isGK) {
        playerStats.forEach(player => {
            if (player.club === club && player.pos === "G") {
                result.push(player);
            } 
        });
    } else {
        playerStats.forEach(player => {
            if (player.club === club && player.pos !== "G") {
                result.push(player);
            } 
        });
    }

    

    return result;
}