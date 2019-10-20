import React from 'react';
import PlayerRow from './PlayerRow';

export default class PlayersTable extends React.Component {
  render() {
    const rows = [];
    
    console.log(this.props.players);

    this.props.players.forEach((player) => {
      rows.push(
        <PlayerRow
          player={player}
          key={player._id} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Pos</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}