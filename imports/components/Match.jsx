import React from 'react';

export default class Match extends React.Component {

    render() {
        let fixture = this.props.fixture;

        return (
            <table>
                <tbody>
                    <tr>
                        <td>{fixture.home}</td>
                        <td> - </td>
                        <td>{fixture.away}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}