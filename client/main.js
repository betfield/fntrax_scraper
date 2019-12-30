import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/config/routes';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});