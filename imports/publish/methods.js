import fetchAPIData from '../../server/actions/fetch_data';
import { Fixtures } from '../collections';

const CONFIG = require('../../server/config/config');

Meteor.methods({
    getServerTime: function () {
        return (new Date).toTimeString();
    },
    getCurrentRoundFixtures: async function() {
        const result = Fixtures.find({"roundInfo.round": parseInt(Meteor.settings.public.apiParams.round_id)}).fetch();
        console.log(result);
        return result;
    },
    getFixtureLineup: async function(mapObj) {
        const result = await fetchAPIData(CONFIG.URL_SOFASCORE_FIXTURE_LINEUPS, mapObj);
        console.log(result);
        return result;
    }
}); 