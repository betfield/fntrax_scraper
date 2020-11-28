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
    this.offset = null;
    this.gw = null;
    this.apiMap = null;

    setInterval(function () {
      Meteor.call("getServerTime", function (error, result) {
        Session.set("time", result);
      });
    }, 1000);
  }

  render () {
    const time = Session.get("time");

    Meteor.call("getGameWeek", (error, result) => {
      this.gw = result;
    });

    Meteor.call("getApiMap", (error, result) => {
      this.apiMap = result;
    });

    Meteor.call("getOffsetValue", (error, result) => {
      this.offset = result/1000;
    });

    if(time !== null && this.offset !== null && this.gw !== null && this.apiMap !== null) {
      return (
        <div>
          <Time time={time} />
          <Row>
            <Offset offset={this.offset} />
            <Gameweek gw={this.gw} />
          </Row>
          <Row>
            <ApiSettings apiMap={this.apiMap}/>
            <RoundFixtures />
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
