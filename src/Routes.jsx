import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './containers';
import { KegList } from './components/KegList';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={KegList} />
  </Switch>
);

export default Routes;
