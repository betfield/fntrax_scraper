import { Fixtures } from "../collections";

const CONFIG = require('../config/config');

// Publish all fixtures from the local DB
Meteor.publish("getFixture", function (fixtureId) {
    let self = this;

    let subHandle = Fixtures.find({"fixture.id": fixtureId}).observeChanges({
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