import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Time from './Time';
import Offset from './Offset';

export default class Dashboard extends TrackerReact(React.Component) {
  
  constructor(props) {
    super(props);
    Session.set("time", null);

    setInterval(function () {
      Meteor.call("getServerTime", function (error, result) {
        Session.set("time", result);
      });
    }, 1000);
  }

  render () {
    const time = Session.get("time");

    if(time !== null) {
      return (
        <div>
          <Time time={time} />
          <Offset />
        </div>
      )
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

/*

Template.scraper.events({
  'click button'(event, instance) {
    // Start/Stop the scraper when button is clicked
    console.log(instance.scraper.get() + " button was pressed");

    // TODO: Add handler for not allowing multiple presses

    if (instance.scraper.get() === "Stop") {
      Meteor.call('stopDataCollection', function(err, res) {
        if(err) {
          console.error(err);
        } else {
          // Change button label to Start
          instance.scraper.set("Start");
        }
      });
    } else {
      Meteor.call('startDataCollection', function(err, res) {
        if(err) {
          console.error(err);
        } else {
          // Change button label to Stop
          instance.scraper.set("Stop");
        }
      });
    }
  },
});
*/