import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Match from './Match';
import PlayersTable from './PlayersTable';
import { PlayerStats } from '../collections';

export default class PlayersContainer extends TrackerReact(React.Component) {

    render () {

        const subscription = Meteor.subscribe("playerstats");

        if (subscription.ready()) {
            let playerStats = PlayerStats.find({}).fetch();
            
            return (
                <div>
                <Match />
                <PlayersTable players={getClubPlayers("MUN", playerStats)} />
                <PlayersTable players={getClubPlayers("LIV", playerStats)} />
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

    playerStats.forEach(stats => {
        stats.players.forEach(player => {
            if (player.club === club) {
                result.push(player);
            } 
        })
    });

    return result;
}