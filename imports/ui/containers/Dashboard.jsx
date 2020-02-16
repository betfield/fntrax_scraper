import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Time from '../../components/Time';
import Offset from '../../components/Offset';
import PlayerStats from '../../components/PlayerStats';
import Gameweek from '../../components/GameWeek';

export default class Dashboard extends TrackerReact(React.Component) {
  
  constructor(props) {
    super(props);
    Session.set("time", null);
    this.offset = null;
    this.gw = null;

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

    Meteor.call("getOffsetValue", (error, result) => {
      this.offset = result/1000;
    });

    if(time !== null && this.offset !== null && this.gw !== null) {
      return (
        <div>
          <Time time={time} />
          <Offset offset={this.offset} />
          <Gameweek gw={this.gw} />
          <PlayerStats />
        </div>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}
