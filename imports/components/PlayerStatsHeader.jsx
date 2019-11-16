import React from 'react';

const HEADERS = require('../config/headers');

export default class PlayerStatsHeader extends React.Component {
  
  render() {

        const headers = [];
        const headerType = this.props.type;

        // Iterate over all player details header values and add header element to array
        HEADERS.playerDetailsHeaders.forEach((header) => {
            headers.push(
                
            );
        });

        // Iterate over all player stats header values and add header elements to the same array
        // Depending on type, use the relevant headers
        if (headerType === "OF") {
            HEADERS.playerStatsHeaders.forEach((header) => {
                headers.push(
                    <th className="text-muted" key={header}>{header}</th>
                );
            });
        } else if (headerType ==="GK") {
            HEADERS.playerStatsHeadersGK.forEach((header) => {
                headers.push(
                    <th className="text-muted" key={header}>{header}</th>
                );
            });
        }
        
        return (
            <tr>
                <th className="text-muted">Pos</th>
                <th className="text-muted" style={{width: '30%'}}>Name</th>
                {headers}
            </tr>
        );
    }
}
