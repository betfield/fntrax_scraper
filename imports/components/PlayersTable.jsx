import React from 'react';
import PlayerRow from './PlayerRow';

export default class PlayersTable extends React.Component {
  render() {
    const rows = [];
    
    this.props.players.forEach((player) => {
      rows.push(
        <PlayerRow
          player={player}
          key={player.id} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Pos</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}