import fetchAPIData from '../../server/actions/fetch_data';

const CONFIG = require('../../server/config/config');

Meteor.methods({
    getServerTime: function () {
        return (new Date).toTimeString();
    },
    getRoundFixtures: async function(mapObj) {
        const result = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURES, mapObj);
        console.log(result);
        return result.events;
    },
    getFixtureLineup: async function(mapObj) {
        const result = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
        console.log(result);
        return result;
    }
});