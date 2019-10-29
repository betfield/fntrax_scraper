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
            <td>Goals</td>
            <td>KP</td>
            <td>AT</td>
            <td>SOT</td>
            <td>TkW</td>
            <td>DIS</td>
            <td>YC</td>
            <td>ACNC</td>
            <td>Int</td>
            <td>CLR</td>
            <td>CoS</td>
            <td>AER</td>
            <td>GAO</td>
            <td>CS</td>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}