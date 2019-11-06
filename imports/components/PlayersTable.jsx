import React from 'react';
import PlayerStatsHeader from './PlayerStatsHeader';
import PlayerRow from './PlayerRow';

const HEADERS = require('../config/headers');

export default class PlayersTable extends React.Component {
  render() {
    const rows = [];
    
    this.props.players.forEach((player) => {
      rows.push(
        <PlayerRow
          player={player}
          headers={HEADERS.playerStatsHeaders}
          key={player.id} />
      );
    });

    return (
      <table>
        <thead>
          <PlayerStatsHeader headers={HEADERS.playerStatsHeaders}/>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}