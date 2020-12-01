import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

export default class Time extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: null
    }
    this.updateTime = this.updateTime.bind(this)

    setInterval(() => {
      this.updateTime()
    }, 1000);
  }

  updateTime() {
    Meteor.call("getServerTime", (error, result) => {
      this.setState({ time: result });
    });
  }

  render() {

      if(this.state.time !== null) {
        return (
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Server time:</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-world text-info" />{" "}
                    {this.state.time.split(" ")[0]}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Local time:</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-watch-time text-info" />{" "}
                    {new Date().toTimeString().split(" ")[0]}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        );
      } else {
        return (
          <p>Loading...</p>
        )
      }
    }
  }
