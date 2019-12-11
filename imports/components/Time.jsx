import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

export default class Time extends React.Component {
  
  render() {
      const time = this.props.time;
      const local = new Date();

      return (
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Server time:</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-world text-info" />{" "}
                  {time.split(" ")[0]}
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
                  {local.toTimeString().split(" ")[0]}
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      );
    }
  }
