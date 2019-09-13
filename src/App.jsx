import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import KegList from './components/KegList';
import NewKeg from './components/NewKeg';

import reactLogo from './assets/React-icon.png';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      kegsMasterList: [{name: "Tropic Thunder", style: "Hazy IPA", brand: "Back Pedal", abv: 7.5, price: 6, pints: 45},{name: "Guava Slap", style: "Passionfruit/Guava Hef", brand: "Back Pedal", abv: 6.5, price: 6, pints: 15}]
    }
  }

  addKegToList = (keg) => {
  console.log('second log:' + keg);
  let temp = this.state.kegsMasterList.slice()
  temp.push(keg)
  this.setState({ kegsMasterList: temp}, console.log(this.state.kegsMasterList))
}

handleSellPint = (key) => {
   let temp = this.state.kegsMasterList.slice()
   temp[key].pints--;
   if (temp[key].pints === 0) {
     temp.splice(key, key + 1)
   }
   this.setState({ kegsMasterList: temp })
 }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <KegList kegsList={this.state.kegsMasterList} onSellPint={this.handleSellPint}/> } />
            <Route exact path="/newkeg" render={() => <NewKeg callback={this.addKegToList}/>} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
