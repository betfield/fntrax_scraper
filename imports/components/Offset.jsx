import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default class Offset extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      offset: this.props.offset
    }
    this.submitForm = this.submitForm.bind(this);
  }

  stopCollection() {
    Meteor.call("stopDataCollection", function (error, result) {
    });
  }

  startCollection() {
    Meteor.call("startDataCollection", function (error, result) {
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      offset: this.offsetRef.value * 1000
    }, () => {
      Meteor.call("setOffsetValue", this.state.offset, function (error, result) {
      });
    });
  }

  render() {
      return (
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Update offset:</h5>
                <CardTitle tag="h3">
                  <Form onSubmit={ this.submitForm }>
                    <i className="tim-icons icon-refresh-02 text-info" />{"  "}
                    <Input placeholder={this.state.offset} type="text" innerRef={(node) => this.offsetRef = node} />
                    <Button color="info" size="sm" >
                      <input className="d-none" type="submit" />
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Save
                      </span>
                    </Button>
                  </Form>
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
