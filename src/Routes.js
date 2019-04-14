import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Components
import Home from './views/home';
import Movie from './views/movie';

export const history = createHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route
        path='/'
        exact={true}
        component={Home}
      />
      <Route
        path='/movie/:movieId'
        exact={true}
        component={Movie}
      />
    </Switch>
  </Router>
);

export default Routes;