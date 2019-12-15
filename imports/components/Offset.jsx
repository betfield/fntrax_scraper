import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

export default class Offset extends React.Component {
  
  stopCollection() {
    Meteor.call("stopDataCollection", function (error, result) {
    });
  }

  startCollection() {
    Meteor.call("startDataCollection", function (error, result) {
    });
  }

  render() {
      const offset = Meteor.settings.public.timeDiff;

      return (
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Update offset:</h5>
                <CardTitle tag="h3">
                  <FormGroup>
                    <i className="tim-icons icon-refresh-02 text-info" />{"  "}
                    <Input placeholder={offset} type="text" />
                    <Button color="info" size="sm" onClick={() => console.log("Save pressed")} >
                      <input className="d-none" type="submit" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Save
                      </span>
                    </Button>
                  </FormGroup>
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
        </Row>
      );
    }
  }
