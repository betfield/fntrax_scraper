import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  Form,
  Input,
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
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
      );
    }
  }
