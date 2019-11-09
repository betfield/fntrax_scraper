import React from 'react';

const HEADERS = require('../config/headers');

export default class PlayerRow extends React.Component {
  
  render() {

        const headers = [];
        const headerType = this.props.type;

        // Iterate over all player details header values and add header element to array
        HEADERS.playerDetailsHeaders.forEach((header) => {
            headers.push(
                <th key={header}>{header}</th>
            );
        });

        // Iterate over all player stats header values and add header elements to the same array
        // Depending on type, use the relevant headers
        if (headerType === "OF") {
            HEADERS.playerStatsHeaders.forEach((header) => {
                headers.push(
                    <th key={header}>{header}</th>
                );
            });
        } else if (headerType ==="GK") {
            HEADERS.playerStatsHeadersGK.forEach((header) => {
                headers.push(
                    <th key={header}>{header}</th>
                );
            });
        }
        
        return (
            <tr>
                {headers}
            </tr>
        );
    }
}
