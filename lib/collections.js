// Common code on client and server declares a DDP-managed Mongo collection.
PlayerStats = new Mongo.Collection('playerstats');

export { PlayerStats }