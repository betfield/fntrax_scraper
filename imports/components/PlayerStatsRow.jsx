import React from 'react';
import PlayerStatsCell from './PlayerStatsCell';
import PlayerDetails from './PlayerDetails';

const HEADERS = require('../config/headers');

export default class PlayerStatsRow extends React.Component {
  
  render() {
      
      const cells = [];
      const player = this.props.player;
      const playerDetails = {
        name: player.name,
        club: player.club,
        pos: player.pos,
        team: player.team
      };
      const stats = player.stats;
      const headerType = this.props.type;

      let headers = [];

      // Set table headers based on the player type submitted to the component
      if (headerType === "OF") {
        headers = HEADERS.playerStatsHeaders;
      } else if (headerType === "GK") {
        headers = HEADERS.playerStatsHeadersGK;
      }

      // Iterate over all table header values and add respective value from player stats object
      headers.forEach((header) => {
        // If player stats object contains a value with the respective header key then set it as the cell value
        cells.push(
          <PlayerStatsCell
            data={stats[header]}
            key={header} />
        );
      });
      
      return (
        <tr>
          <PlayerDetails player={playerDetails}/>
          {cells}
        </tr>
      );
    }
  }
