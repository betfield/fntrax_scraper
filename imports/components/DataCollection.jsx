import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  Col,
} from "reactstrap";

export default class DataCollection extends React.Component {
  
  stopCollection() {
    Meteor.call("stopDataCollection", function (error, result) {
    });
  }

  startCollection() {
    Meteor.call("startDataCollection", function (error, result) {
    });
  }

  render() {
      return (
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">Data Collection:</h5>
              <CardTitle tag="h3">
                <Button color="info" size="sm" onClick={() => this.startCollection()} >
                  <input className="d-none" type="submit" />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Start
                  </span>
                </Button>
                <Button color="info" size="sm" onClick={() => this.stopCollection()} >
                  <input className="d-none" type="submit" />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    Stop
                  </span>
                </Button>
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
      );
    }
  }
