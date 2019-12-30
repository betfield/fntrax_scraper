import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from 'history';

// route components
import PlayerStatsContainer from '../ui/containers/PlayerStatsContainer';
import Dashboard from '../ui/containers/Dashboard';
import NotFoundPage from '../components/NotFoundPage';

const browserHistory = history.createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={PlayerStatsContainer}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);