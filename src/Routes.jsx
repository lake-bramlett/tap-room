import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './containers';
import KegList from './components/KegList';
import NewKeg from './components/NewKeg';
import Header from './components/Header';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={KegList} />
    <Route exact path="/new" component={NewKeg} />
  </Switch>
);

export default Routes;
