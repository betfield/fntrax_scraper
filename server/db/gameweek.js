import { Fixtures } from '../../imports/collections';

function updateActiveGameweek(events) {
    events.forEach(event => {
        Fixtures.upsert({
            "id": event.id
        },{
            $set: event
        });
    })
}

export { updateActiveGameweek }