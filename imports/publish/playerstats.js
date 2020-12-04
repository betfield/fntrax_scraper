import { PlayerStats } from "../collections";

// Publish all players from the local DB
Meteor.publish("playerstats", function () {
	let self = this;
    
    let subHandle = PlayerStats.find({}).observeChanges({
        added: function(id, fields) {
            self.added("playerstats", id, fields);
        },
        changed: function(id, fields) {
            self.changed("playerstats", id, fields);
        },
        removed: function(id) {
            self.removed("playerstats", id);
        }
    });

    self.onStop(function () {
        subHandle.stop();
    });

	self.ready();
});

Meteor.publish("lineupPlayersStats", function (fixtureId) {
	let self = this;
    
    let subHandle = PlayerStats.find({"fixtureId": fixtureId}, {fields: {"home.players": 1, "away.players": 1, "fixtureId": 1}}).observeChanges({
        added: function(id, fields) {
            self.added("playerstats", id, fields);
        },
        changed: function(id, fields) {
            self.changed("playerstats", id, fields);
        },
        removed: function(id) {
            self.removed("playerstats", id);
        }
    });

    self.onStop(function () {
        subHandle.stop();
    });

	self.ready();
});

