import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Form,
  Button
} from "reactstrap";

export default class PlayerStats extends React.Component {
  
  constructor(props) {
    super(props);
    this.submitFormClearPlayers = this.submitFormClearPlayers.bind(this);
    this.submitFormGameWeek = this.submitFormGameWeek.bind(this);
    this.submitFormLeagueData = this.submitFormLeagueData.bind(this);
  }

  submitFormClearPlayers(e) {
    e.preventDefault();
    Meteor.call("clearPlayers", function (error, result) {
    });
  }

  submitFormGameWeek(e) {
    e.preventDefault();
    Meteor.call("populateGameWeek", function (error, result) {
    });
  }

  submitFormLeagueData(e) {
    e.preventDefault();
    Meteor.call("populateLeagueData", function (error, result) {
    });
  }

  render() {
      
      return (
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">Player Stats:</h5>
              <CardTitle tag="h3">
                <Form onSubmit={ this.submitFormClearPlayers }>
                  <i className="tim-icons icon-refresh-02 text-info" />{"  "}
                  <Button color="info" size="sm" >
                    <input className="d-none" type="submit" />
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Clear Stats
                    </span>
                  </Button>
                </Form>
                <Form onSubmit={ this.submitFormGameWeek }>
                  <i className="tim-icons icon-refresh-02 text-info" />{"  "}
                  <Button color="info" size="sm" >
                    <input className="d-none" type="submit" />
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Load Gameweek
                    </span>
                  </Button>
                </Form>
                <Form onSubmit={ this.submitFormLeagueData }>
                  <i className="tim-icons icon-refresh-02 text-info" />{"  "}
                  <Button color="info" size="sm" >
                    <input className="d-none" type="submit" />
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Load League Data
                    </span>
                  </Button>
                </Form>
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
      );
    }
  }
