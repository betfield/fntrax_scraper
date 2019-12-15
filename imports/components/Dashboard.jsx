import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Time from './Time';
import Offset from './Offset';

export default class Dashboard extends TrackerReact(React.Component) {
  
  constructor(props) {
    super(props);
    Session.set("time", null);
    this.offset = null;

    setInterval(function () {
      Meteor.call("getServerTime", function (error, result) {
        Session.set("time", result);
      });
    }, 1000);
  }

  render () {
    const time = Session.get("time");
    Meteor.call("getOffsetValue", (error, result) => {
      this.offset = result/1000;
    });

    if(time !== null && this.offset !== null) {
      return (
        <div>
          <Time time={time} />
          <Offset offset={this.offset} />
        </div>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}
