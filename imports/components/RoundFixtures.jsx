import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    Col
  } from "reactstrap";

import AppSettingsDropdown from './api/ApiSettingsDropdown';

export default class RoundFixtures extends React.Component {

    fixtures = [
        {id: 1, name: "Üks"},
        {id: 2, name: "Kaks"},
        {id: 3, name: "Kolm"}
    ];

    render() {

        return (
            <Col lg="4">
                <Card className="card-chart">
                    <CardHeader>
                        <h5 className="card-category">Round fixtures:</h5>
                        <CardTitle tag="h3">
                        <i className="tim-icons icon-world text-info" />{" "}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <AppSettingsDropdown fixtures={this.fixtures}/>
            </Col>
        );
    }
}