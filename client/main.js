import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'
import React from 'react';
import { render } from 'react-dom';
import Dashboard from '../imports/components/Dashboard';

Meteor.startup(() => {
    render(<Dashboard />, document.getElementById('app'));
});