import { Mongo } from 'meteor/mongo';

// Common code on client and server declares a DDP-managed Mongo collection.
PlayerStats = new Mongo.Collection("playerstats");
Fixtures = new Mongo.Collection("fixtures");
Teams = new Mongo.Collection("teams");
Params = new Mongo.Collection("params");

export { PlayerStats, Fixtures, Teams, Params };
