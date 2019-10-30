import React from 'react';

export default class PlayerRow extends React.Component {
    render() {
      const player = this.props.player;
  
      return (
        <tr>
          <td>{player.name}</td>
          <td>{player.team.name}</td>
          <td>{player.pos}</td>
          <td>{player.stats.G}</td>
          <td>{player.stats.KP}</td>
          <td>{player.stats.AT}</td>
          <td>{player.stats.SOT}</td>
          <td>{player.stats.TkW}</td>
          <td>{player.stats.DIS}</td>
          <td>{player.stats.YC}</td>
          <td>{player.stats.ACNC}</td>
          <td>{player.stats.Int}</td>
          <td>{player.stats.CLR}</td>
          <td>{player.stats.CoS}</td>
          <td>{player.stats.AER}</td>
          <td>{player.stats.GAO}</td>
          <td>{player.stats.CS}</td>
          <td>{player.stats.FPts}</td>
        </tr>
      );
    }
  }