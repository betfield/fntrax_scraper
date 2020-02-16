import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Form,
  Button,
  Input
} from "reactstrap";

export default class GameWeek extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gw: this.props.gw
    }
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      gw: this.gwRef.value
    }, () => {
      Meteor.call("setGameWeek", this.state.gw, function (error, result) {
      });
    });
    
  }

  render() {
      
      return (
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Gameweek:</h5>
                <CardTitle tag="h3">
                <Form onSubmit={ this.submitForm }>
                    <i className="tim-icons icon-refresh-02 text-info" />{"  "}
                    <Input placeholder={this.state.gw} type="text" innerRef={(node) => this.gwRef = node} />
                    <Button color="info" size="sm" >
                      <input className="d-none" type="submit" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Set GW
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
