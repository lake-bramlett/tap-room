import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import KegList from './components/KegList';
import NewKegForm from './components/NewKegForm';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      kegsMasterList: []
    }
  }

  handleAddKegToList = (keg) => {
  console.log('keg:' + keg);
  let temp = this.state.kegsMasterList.slice()
  temp.push(keg)
  this.setState({ kegsMasterList: temp }, console.log('app state:' + this.state.kegsMasterList))
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <KegList kegsList={this.state.kegsMasterList}/>} />
            <Route exact path="/newkeg" render={() => <NewKegForm onAddKegToList={this.handleAddKegToList} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
