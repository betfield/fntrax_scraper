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

export default class ApiSettings extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      apiMap: this.props.apiMap
    }
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const map = {
        "comp_id": this.compRef.value,
        "season_id": this.seasonRef.value,
        "round_id": this.roundRef.value
    }

    this.setState({
      apiMap: map
    }, () => {
      Meteor.call("setApiMap", this.state.apiMap, function (error, result) {
      });
    });
    
  }

  render() {
      
      return (
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">API Settings:</h5>
              <CardTitle tag="h3">
              <Form onSubmit={ this.submitForm }>
                  <Input placeholder={this.state.apiMap.comp_id} type="text" innerRef={(node) => this.compRef = node} />
                  <Input placeholder={this.state.apiMap.season_id} type="text" innerRef={(node) => this.seasonRef = node} />
                  <Input placeholder={this.state.apiMap.round_id} type="text" innerRef={(node) => this.roundRef = node} />
                  <Button color="info" size="sm" >
                    <input className="d-none" type="submit" />
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Set Round
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
