import { Clubs } from '../../imports/collections';

function getAllClubs() {
    return Clubs.find({}).fetch();
}

export { getAllClubs }