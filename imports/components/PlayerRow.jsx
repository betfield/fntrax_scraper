import React from 'react';

export default class PlayerRow extends React.Component {
    render() {
      const player = this.props.player;
  
      return (
        <tr>
          <td>{player.name}</td>
          <td>{player.pos}</td>
          <td>{player.stats.FPts}</td>
        </tr>
      );
    }
  }