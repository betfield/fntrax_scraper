import { Fixtures } from '../../imports/collections';
import { Clubs } from '../../imports/collections';

function updateActiveGameweek(events) {
    events.forEach(event => {
        // Upsert home team to the Clubs table
        Clubs.upsert({
            "id": event.awayTeam.id
        },{
            $set: event.awayTeam
        });

        // Upsert away team to the Clubs table
        Clubs.upsert({
            "id": event.homeTeam.id
        },{
            $set: event.homeTeam
        });

        // Upsert event to the Fixtures table
        Fixtures.upsert({
            "id": event.id
        },{
            $set: event
        });
    })
}

export { updateActiveGameweek }