import React from 'react';
import PlayerStatsHeader from './PlayerStatsHeader';
import PlayerRow from './PlayerRow';

export default class PlayersTable extends React.Component {
  render() {
    const rows = [];
    
    this.props.players.forEach((player) => {
      rows.push(
        <PlayerRow
          type={this.props.type}
          player={player}
          key={player.id} />
      );
    });

    return (
      <table className="tablesorter">
        <thead className="text-info">
          <PlayerStatsHeader type={this.props.type}/>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}