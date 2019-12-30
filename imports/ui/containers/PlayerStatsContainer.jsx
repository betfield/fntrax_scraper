import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Match from '../../components/Match';
import Event from '../../components/Event';
import PlayerStatsTable from '../../components/PlayerStatsTable';
import { PlayerStats, Fixtures } from '../../collections';
import { Container, Row, Col } from "reactstrap";

const CONFIG = require('../../config/config');

export default class PlayerStatsContainer extends TrackerReact(React.Component) {

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
            
            const home = {
                OF: getClubPlayers(currentFixture.homeShort, playerStats, false),
                GK: getClubPlayers(currentFixture.homeShort, playerStats, true)
            };

            const away = {
                OF: getClubPlayers(currentFixture.awayShort, playerStats, false),
                GK: getClubPlayers(currentFixture.awayShort, playerStats, true)
            };

            return (
                <div className="content">
                    <Container fluid={true}>
                        <Event home={home} away={away} />
                        <Row>
                            <Col>
                                <Match fixture={currentFixture}/>
                                <Row>
                                    <Col xl="6">
                                        <PlayerStatsTable players={home.OF} type={"OF"} />
                                        <PlayerStatsTable players={home.GK} type={"GK"} />
                                    </Col>
                                    <Col xl="6">
                                        <PlayerStatsTable players={away.OF} type={"OF"} />
                                        <PlayerStatsTable players={away.GK} type={"GK"} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
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