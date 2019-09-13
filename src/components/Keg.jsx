import React, {Component} from 'react'

export default class Keg extends Component {
  constructor(props){
    super(props)
  }

  sellPint = () => {
  this.props.onSellPint(this.props.index)
}


  render(){
    const { name, brand, abv, price, pints } = this.props.keg;
    return (
        <div className="keg">
          <div className="name">
            <h3>{name}</h3>
          </div>
          <div className="brand">
            <h4>{brand}</h4>
          </div>
          <div className="sub-info">
            <span>{abv}%</span><span>${price}</span>
          </div>
          <div className="pints">
            {pints}
          </div>
        <div className="button" onClick={this.sellPint}>Buy</div>
        </div>
    )
  }
}
