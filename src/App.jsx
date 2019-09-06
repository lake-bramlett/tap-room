import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import KegList from './components/KegList';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <Switch>
      <div>
        <Header />
        <Route exact path="/" component={KegList} />
      </div>
    </Switch>
);

export default App;
