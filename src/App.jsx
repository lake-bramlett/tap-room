import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import KegList from './components/KegList';
import NewKeg from './components/NewKeg'

import Routes from './Routes';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      kegsMasterList: []
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <KegList kegsList={this.state.kegsMasterList}/>} />
            <Route exact path="/newkeg" render={() => <NewKeg />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
