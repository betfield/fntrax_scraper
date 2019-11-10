import React from 'react';
import PlayerStatsHeader from './PlayerStatsHeader';
import PlayerRow from './PlayerRow';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table
} from "reactstrap";

export default class PlayersTable extends React.Component {
  render() {
    const outfielders = [];
    const goalkeepers = [];
    
    this.props.OF.forEach((player) => {
      outfielders.push(
        <PlayerRow
          type={"OF"}
          player={player}
          key={player.id} />
      );
    });

    this.props.GK.forEach((player) => {
      goalkeepers.push(
        <PlayerRow
          type={"GK"}
          player={player}
          key={player.id} />
      );
    });

    return (
      <Card>
        <CardHeader>
          <CardTitle tag="h4">{this.props.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Table className="tablesorter">
            <thead className="text-info">
              <PlayerStatsHeader type={"OF"}/>
            </thead>
            <tbody>{outfielders}</tbody>
          </Table>
          <Table className="tablesorter">
            <thead className="text-info">
              <PlayerStatsHeader type={"GK"}/>
            </thead>
            <tbody>{goalkeepers}</tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}