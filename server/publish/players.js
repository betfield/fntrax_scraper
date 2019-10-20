import { PlayerStats } from "../../imports/collections";

// Publish all players from the local DB
Meteor.publish("playerstats", function () {
	let self = this;
    
    console.log("tra, olen siin nüüd");

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

    console.log("ja nüüd ssin");

	self.ready();
});
