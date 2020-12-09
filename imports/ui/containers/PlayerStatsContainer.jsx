/*import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Match from '../../components/Match';
import Event from '../../components/Event';
import PlayerStatsTable from '../../components/PlayerStatsTable';
import { PlayerStats } from '../../collections';
import { Container, Row, Col } from "reactstrap";

const CONFIG = require('../../config/config');

export default class PlayerStatsContainer extends TrackerReact(React.Component) {
    constructor(props) {
        super(props);
        this.state = {
            currentFixture: null
        };

        Meteor.call("getSelectedFixture", (error, result) => {
            console.log(result);
            this.setState({ currentFixture: result });
        });
    }

    render () {
        if (this.state.currentFixture !== null) {
            const subPlayerStats = Meteor.subscribe("playerstats");

            if (subPlayerStats.ready()) {
                const playerStats = PlayerStats.findOne({});
                
                console.log(playerStats);

                const home = {
                    OF: alignPlayers(playerStats.home.players, false),
                    GK: alignPlayers(playerStats.home.players, true)
                };

                const away = {
                    OF: alignPlayers(playerStats.away.players, false),
                    GK: alignPlayers(playerStats.away.players, true)
                };
                
                return (
                    <div className="content">
                        <Container fluid={true}>
                            <Event home={home} away={away} />
                            <Row>
                                <Col>
                                    <Match fixture={this.state.currentFixture}/>
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
                    <p>Loading... waiting for lineups</p>
                )
            }
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }
}
*/
import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Match from '../../components/Match';
import Event from '../../components/Event';
import PlayerStatsTable from '../../components/PlayerStatsTable';
import { PlayerStats, Fixtures } from '../../collections';
import { Container, Row, Col } from "reactstrap";

const CONFIG = require('../../config/config');

export default class PlayerStatsContainer extends TrackerReact(React.Component) {
    constructor(props) {
        super(props);
        this.state = {
            currentFixture: null
        };

        Meteor.call("getSelectedFixture", (error, result) => {
            this.setState({ currentFixture: result });
        });
    }

    render () {
        if (this.state.currentFixture !== null) {
            const subPlayerStats = Meteor.subscribe("playerstats");

            if (subPlayerStats.ready()) {
        
                const playerStats = PlayerStats.find({}).fetch();
                const currentFixture = Fixtures.findOne({});
                
                const home = {
                    OF: getClubPlayers(this.state.currentFixture.homeTeam.nameCode, playerStats, false),
                    GK: getClubPlayers(this.state.currentFixture.homeTeam.nameCode, playerStats, true)
                };

                const away = {
                    OF: getClubPlayers(this.state.currentFixture.awayTeam.nameCode, playerStats, false),
                    GK: getClubPlayers(this.state.currentFixture.awayTeam.nameCode, playerStats, true)
                };

                return (
                    <div className="content">
                        <Container fluid={true}>
                            <Event home={home} away={away} />
                            <Row>
                                <Col>
                                    <Match fixture={this.state.currentFixture}/>
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
                    <p>Loading... waiting for lineups</p>
                )
            }
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
