import { PlayerStats } from '../../imports/collections';

function updatePlayerStats(data) {

    let diff = Meteor.settings.public.timeDiff;
    console.log(diff);

    Meteor.setTimeout(() => {
        data.forEach(player => {
            PlayerStats.upsert({
                "id": player.id
            },{
                $set: player
            });
        });
    }, diff);
}

export { updatePlayerStats }