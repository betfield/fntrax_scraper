import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    Col
  } from "reactstrap";

import AppSettingsDropdown from './api/ApiSettingsDropdown';

export default class RoundFixtures extends React.Component {

    render() {

        return (
            <Col lg="4">
                <AppSettingsDropdown fixtures={this.props.fixtures}/>
            </Col>
        );
    }
}