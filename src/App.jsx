import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import KegList from './components/KegList';
import NewKeg from './components/NewKeg';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <Router>
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={KegList} />
      <Route exact path="/newkeg" component={NewKeg} />
  </Switch>
  </div>
  </Router>
);

export default App;
