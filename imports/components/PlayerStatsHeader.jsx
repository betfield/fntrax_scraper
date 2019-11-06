import React from 'react';

export default class PlayerRow extends React.Component {
  
  render() {
        const HEADERS = this.props.headers;
        const stats = [];

        // Iterate over all table header values and add respective value from player stats object
        HEADERS.forEach((header) => {
            // If player stats object contains a value with the respective header key then set it as the cell value
            stats.push(
                <th key={header}>{header}</th>
            );
        });
        
        return (
            <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Pos</th>
                {stats}
            </tr>
        );
    }
}
