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
  
  submitFormClearPlayers() {
    Meteor.call("clearPlayers", function (error, result) {
    });
  }

  submitFormGameWeek() {
    Meteor.call("populateGameWeek", function (error, result) {
    });
  }

  submitFormLeagueData() {
    Meteor.call("populateLeagueData", function (error, result) {
    });
  }

  render() {
      
      return (
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">Actions:</h5>
              <CardTitle tag="h3">
                <Button color="info" size="sm" >
                  <input className="d-none" type="submit" onClick={() => this.submitFormClearPlayers()}/>
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Clear Stats
                  </span>
                </Button>
                <Button color="info" size="sm" onClick={() => this.submitFormGameWeek()}>
                  <input className="d-none" type="submit" />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Load Gameweek
                  </span>
                </Button>
                <Button color="info" size="sm" onClick={() => this.submitFormLeagueData()}>
                  <input className="d-none" type="submit" />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Load League Data
                  </span>
                </Button>
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
      );
    }
  }
