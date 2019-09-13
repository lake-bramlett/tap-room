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
        Name: {name}
        Brand: {brand}
        Abv: {abv}
        Price: {price}
        Pints: {pints}
        <div onClick={this.sellPint}>Buy</div>
        </div>
    )
  }
}
