import React from 'react';
import { Card, CardBody, Container, Row, Col } from "reactstrap";

const CONFIG = require('../config/config');

export default class Match extends React.Component {

    state = { 
        homeColor: "",
        awayColor: ""
     };
	
    componentWillUnmount() {
        if (this.updateTimer) {
            clearTimeout(this.updateTimer);
        }
    }

    updateAndNotify = (team) => {
        if (this.updateTimer) return;
        
        if (team === "home") {
            this.setState({ homeColor: "text-warning" });
        } else if (team === "away") {
            this.setState({ awayColor: "text-warning" });
        }

        this.updateTimer = setTimeout(() => {
            this.setState({ homeColor: "", awayColor: "" });
            this.updateTimer = null;
        }, CONFIG.textChangeTimeout);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.fixture.homeScore.current !== this.props.fixture.homeScore.current) {
            this.updateAndNotify("home");
        }

        if (prevProps.fixture.awayScore.current !== this.props.fixture.awayScore.current) {
            this.updateAndNotify("away");
        }
    }

    render() {
        const fixture = this.props.fixture;
        const homeScore = parseInt(fixture.homeScore.current);
        const awayScore = parseInt(fixture.awayScore.current);

        return (
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col sm="4" className="title text-center"><h3>{fixture.homeTeam.name}</h3></Col>
                            <Col sm="4" className="title text-center">
                                <h3>
                                    <span className={this.state.homeColor}>{homeScore}</span>
                                    <span> : </span>
                                    <span className={this.state.awayColor}>{awayScore}</span>
                                </h3>
                            </Col>
                            <Col sm="4" className="title text-center"><h3>{fixture.awayTeam.name}</h3></Col>
                        </Row>
                    </Container>        
                </CardBody>
            </Card>
        );
    }
}