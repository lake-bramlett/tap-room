import React, {Component} from 'react'

export default class Keg extends Component {
  constructor(props){
    super(props)
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
        </div>
    )
  }
}
