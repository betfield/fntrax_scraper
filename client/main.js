import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  
});

/*
Template.scraper.onCreated(function scraperOnCreated() {
  // scraper starts automatically with Meteor startup
  this.scraper = new ReactiveVar("Stop");
});

Template.scraper.helpers({
  scraper() {
    return Template.instance().scraper.get();
  },
});

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