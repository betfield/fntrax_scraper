import { Fixtures } from '../../imports/collections';

function updateActiveGameweek(gameweek) {
    gameweek.forEach(gw => {
        gw.forEach(fixture => {
            Fixtures.upsert({
                "date": fixture.date,
                "time": fixture.time,
                "home": fixture.home
            },{
                $set: fixture
            });
        })
    })
}

export { updateActiveGameweek }