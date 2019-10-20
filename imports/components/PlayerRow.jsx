import React from 'react';

export default class PlayerRow extends React.Component {
    render() {
      const player = this.props.player;
      const name = player.GK.name;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{player.GK.pos}</td>
        </tr>
      );
    }
  }