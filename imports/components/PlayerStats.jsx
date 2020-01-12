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
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    Meteor.call("clearPlayers", function (error, result) {
    
    });
  }

  render() {
      
      return (
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Player Stats:</h5>
                <CardTitle tag="h3">
                <Form onSubmit={ this.submitForm }>
                    <i className="tim-icons icon-refresh-02 text-info" />{"  "}
                    <Button color="info" size="sm" >
                      <input className="d-none" type="submit" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Clear Stats
                      </span>
                    </Button>
                  </Form>
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      );
    }
  }
