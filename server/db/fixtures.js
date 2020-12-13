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

function updateFixtureStatus(fixture, incidents) {
    fixture.incidents = incidents;

    Fixtures.upsert({
        "id": fixture.id
    },{
        $set: {
            homeScore:  fixture.homeScore,
            awayScore:  fixture.awayScore,
            winnerCode: fixture.winnerCode,
            status:     fixture.status,
            incidents:  fixture.incidents
        } 
    });
}

function getFixture(fixtureId) {
    return Fixtures.find({"id": fixtureId}).fetch();
}

export { updateActiveGameweek, updateFixtureStatus, getFixture }