import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Match from './Match';
import PlayersTable from './PlayersTable';
import { PlayerStats, Fixtures } from '../collections';

export default class PlayersContainer extends TrackerReact(React.Component) {

    render () {

        const subPlayerStats = Meteor.subscribe("playerstats");
        const subCurrentFixture = Meteor.subscribe("currentfixture");

        if (subCurrentFixture.ready() && subPlayerStats.ready()) {
            let playerStats = PlayerStats.find({}).fetch();
            let currentFixture = Fixtures.findOne({});
            
            return (
                <div>
                <Match fixture={currentFixture}/><br/>
                <PlayersTable players={getClubPlayers(currentFixture.homeShort, playerStats)} />
                <br/>
                <PlayersTable players={getClubPlayers(currentFixture.awayShort, playerStats)} />
                </div>
            );
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }
}

function getClubPlayers(club, playerStats) {
    let result = [];

    playerStats.forEach(player => {
        if (player.club === club) {
            result.push(player);
        } 
    });

    return result;
}