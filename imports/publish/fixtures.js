import { Fixtures } from "../collections";

const CONFIG = require('../config/config');

// Publish all players from the local DB
Meteor.publish("currentfixture", function () {
    let self = this;
    
    // Get today's date
    date = new Date();
    // Subtract 2 hours from the date
    date.setUTCHours(date.getUTCHours() + Meteor.settings.public.hoursOffset);
    console.log("Hours offset: " + Meteor.settings.public.hoursOffset);

    let subHandle = Fixtures.find({ts: { $gte : date}}).observeChanges({
        added: function(id, fields) {
            self.added("fixtures", id, fields);
        },
        changed: function(id, fields) {
            self.changed("fixtures", id, fields);
        },
        removed: function(id) {
            self.removed("fixtures", id);
        }
    });

    self.onStop(function () {
        subHandle.stop();
    });

	self.ready();
});

// Publish all players from the local DB
Meteor.publish("testcurrentfixture", function () {
    let self = this;

    let subHandle = Fixtures.find({"_id": CONFIG.testFixture}).observeChanges({
        added: function(id, fields) {
            self.added("fixtures", id, fields);
        },
        changed: function(id, fields) {
            self.changed("fixtures", id, fields);
        },
        removed: function(id) {
            self.removed("fixtures", id);
        }
    });

    self.onStop(function () {
        subHandle.stop();
    });

	self.ready();
});