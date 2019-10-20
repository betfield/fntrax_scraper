import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Match from './Match';
import PlayersTable from './PlayersTable';
import { PlayerStats } from '../collections';

export default class PlayersContainer extends TrackerReact(React.Component) {

    constructor() {
        super();

        const subscription = Meteor.subscribe("playerstats", {

            onReady: function () {
            // called when data is ready to be fetched
            console.log("faakakakkakak");
            },
        
            onStop: function () {
            // called when data publication is stopped
            }
        })

        this.state = {
            ready: subscription.ready(),
            subscription: subscription
        }
	}
	
	componentWillUnmount() {
		this.state.subscription.stop();
    }
    
    render () {

        let players = PlayerStats.find({}).fetch();

        console.log(players);
        console.log(this.state.ready);

        return (
            <div>
            <Match />
            <PlayersTable players={players} />
            <PlayersTable players={players} />
            </div>
        );
    }
}

        /*home: [
            {pos: 'Sporting Goods', id: '$49.99', name: 'Football'},
            {pos: 'Sporting Goods', id: '$9.99', name: 'Baseball'},
            {pos: 'Sporting Goods', id: '$29.99', name: 'Basketball'},
            {pos: 'Electronics', id: '$99.99', name: 'iPod Touch'},
            {pos: 'Electronics', id: '$399.99', name: 'iPhone 5'},
            {pos: 'Electronics', id: '$199.99', name: 'Nexus 7'}
          ],
          away: [
            {pos: 'Sporting Goods', id: '$49.99', name: 'Football'},
            {pos: 'Sporting Goods', id: '$9.99', name: 'Baseball'},
            {pos: 'Sporting Goods', id: '$29.99', name: 'Basketball'},
            {pos: 'Electronics', id: '$99.99', name: 'iPod Touch'},
            {pos: 'Electronics', id: '$399.99', name: 'iPhone 5'},
            {pos: 'Electronics', id: '$199.99', name: 'Nexus 7'}
          ]*/
