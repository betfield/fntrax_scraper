import React from 'react';
import { Card, CardBody, Container, Row, Col } from "reactstrap";

export default class Match extends React.Component {

    render() {
        let fixture = this.props.fixture;

        return (
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col sm="4" className="title text-center"><h3>{fixture.home}</h3></Col>
                            <Col sm="4" className="title text-center"><h3> - </h3></Col>
                            <Col sm="4" className="title text-center"><h3>{fixture.away}</h3></Col>
                        </Row>
                    </Container>        
                </CardBody>
            </Card>
        );
    }
}