import React from 'react';
import PlayerStatsHeader from './PlayerStatsHeader';
import PlayerStatsRow from './PlayerStatsRow';
import {
  Card,
  CardBody,
  Table
} from "reactstrap";

export default class PlayerStatsTable extends React.Component {
  render() {
    let players = this.props.players;

    if (players.length > 0) {

      const playerStats = [];

      players.sort((a, b) => {
        return b.statistics.rating - a.statistics.rating
      });

      players.forEach((player) => {
        playerStats.push(
          <PlayerStatsRow
            type={this.props.type}
            player={player}
            key={player.player.id} />
        );
      });
      
      return (
        <Card>
          <CardBody>
            <Table className="w-auto">
              <thead className="text-info">
                <PlayerStatsHeader type={this.props.type}/>
              </thead>
              <tbody>{playerStats}</tbody>
            </Table>
          </CardBody>
        </Card>
      );
    } else {
      return null;
    }
  }
}