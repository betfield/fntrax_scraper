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
    Session.set("time", null);
    this.offset = Meteor.call("getOffsetValue", (error, result) => {
      this.offset = result/1000;
    });
    this.gw = Meteor.call("getGameWeek", (error, result) => {
      this.gw = result;
    });
    this.apiMap = Meteor.call("getApiMap", (error, result) => {
      this.apiMap = result;
    });
    this.fixtures = Meteor.call("getRoundFixturesAPI", (error, result) => { 
      console.log(result);
      this.fixtures = result;
    });
  

    setInterval(function () {
      Meteor.call("getServerTime", function (error, result) {
        Session.set("time", result);
      });
    }, 1000);
  }

  render () {
    const time = Session.get("time");

    if(time !== null && this.offset !== null && this.gw !== null && this.apiMap !== null && this.fixtures !== null) {
      return (
        <div>
          <Time time={time} />
          <Row>
            <Offset offset={this.offset} />
            <Gameweek gw={this.gw} />
          </Row>
          <Row>
            <ApiSettings apiMap={this.apiMap}/>
            <RoundFixtures fixtures={this.fixtures} />
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
