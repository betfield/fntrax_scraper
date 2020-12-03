import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Time from '../../components/Time';
import Offset from '../../components/Offset';
import PlayerStats from '../../components/PlayerStats';
import RoundFixtures from '../../components/RoundFixtures';
import { Row } from "reactstrap";
import DataCollection from '../../components/DataCollection';

export default class Dashboard extends TrackerReact(React.Component) {
  
  constructor(props) {
    super(props);
    this.state = {
      offset: null,
      fixtures: null,
      gameweeks: null
    };

    Meteor.call("getOffsetValue", (error, result) => {
      this.setState({ offset: result/1000 });
    });

    Meteor.call("getCurrentRoundFixtures", (error, result) => { 
      this.setState({ fixtures: result });
    });

    Meteor.call("getCompRounds", (error, result) => {
      console.log(result);
      this.setState({ gameweeks: result });
    });
  }

  render () {
    if(this.state.offset !== null && this.state.fixtures !== null && this.state.gameweeks !== null) {

      return (
        <div>
          <Time />
          <Row>
            <Offset offset={this.state.offset} />
            <PlayerStats />
          </Row>
          <Row>
            <DataCollection />
            <RoundFixtures fixtures={this.state.fixtures} />
          </Row>
        </div>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}
