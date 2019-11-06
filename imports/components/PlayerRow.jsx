import React from 'react';
import PlayerStatsCell from './PlayerStatsCell';

export default class PlayerRow extends React.Component {
  
  render() {
      
      const cells = [];
      const player = this.props.player;
      const stats = player.stats;
      const HEADERS = this.props.headers;

      // Iterate over all table header values and add respective value from player stats object
      HEADERS.forEach((header) => {
        // If player stats object contains a value with the respective header key then set it as the cell value

        cells.push(
          <PlayerStatsCell
            data={stats[header]}
            key={header} />
        );
      });
      
      return (
        <tr>
          <td>{player.name}</td>
          <td>{player.club}</td>
          <td>{player.pos}</td>
          {cells}
        </tr>
      );
    }
  }
