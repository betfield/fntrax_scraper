import { Teams } from '../../imports/collections';

function getAllTeams(gameweek) {
    return Teams.find().fetch();
}

export { getAllTeams }