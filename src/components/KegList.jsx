import React, {Component} from 'react';
import Keg from './Keg';
import { v4 } from 'uuid';

export default class KegList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="feed">
        <ul>
        {this.props.kegsList.map((keg, index) => (
          <li>
            <Keg keg={keg} key={v4()} index={index} onSellPint={this.props.onSellPint} />
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
