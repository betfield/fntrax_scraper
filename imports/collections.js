import { Mongo } from 'meteor/mongo';

// Common code on client and server declares a DDP-managed Mongo collection.
PlayerStats = new Mongo.Collection("playerstats");
Fixtures = new Mongo.Collection("fixtures");
Teams = new Mongo.Collection("teams");
Clubs = new Mongo.Collection("clubs");

export { PlayerStats, Fixtures, Teams, Clubs };
