import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Time from '../../components/Time';
import Offset from '../../components/Offset';
import PlayerStats from '../../components/PlayerStats';
import Gameweek from '../../components/GameWeek';
import ApiSettings from '../../components/ApiSettings';
import RoundFixtures from '../../components/RoundFixtures';
import { Row } from "reactstrap";

export default class Dashboard extends TrackerReact(React.Component) {
  
  constructor(props) {
    super(props);
    this.state = {
      offset: null,
      gw: null,
      apiMap: null,
      fixtures: null
    };

    Meteor.call("getOffsetValue", (error, result) => {
      console.log(result);
      this.setState({ offset: result/1000 });
    });

    Meteor.call("getGameWeek", (error, result) => {
      console.log(result);
      this.setState({ gw: result });
    });
      
    Meteor.call("getApiMap", (error, result) => {
      console.log(result);
      this.setState({ apiMap: result });
    });
    
    Meteor.call("getRoundFixtures", (error, result) => { 
      console.log(result);
      this.setState({ fixtures: result });
    });
  }

  render () {
    if(this.state.offset !== null && this.state.gw !== null && this.state.apiMap !== null && this.state.fixtures !== null) {

      return (
        <div>
          <Time />
          <Row>
            <Offset offset={this.state.offset} />
            <Gameweek gw={this.state.gw} />
          </Row>
          <Row>
            <ApiSettings apiMap={this.state.apiMap}/>
            <RoundFixtures fixtures={this.state.fixtures} />
          </Row>
          <Row>
            <PlayerStats />
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
