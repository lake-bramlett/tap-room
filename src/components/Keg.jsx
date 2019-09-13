import React, {Component} from 'react'

export default class Keg extends Component {
  constructor(props){
    super(props)
  }

  sellPint = () => {
  this.props.onSellPint(this.props.index)
}


  render(){
    const { name, style, brand, abv, price, pints } = this.props.keg;
    return (
        <div className="keg">
          <div className="name">
            <h3>{name}</h3>
            <h4>{style}</h4>
          </div>
          <div className="divider"></div>
          <div className="brand">
            <h4>{brand}</h4>
          </div>
          <div className="sub-info">
            <span className="price">${price}</span>
            <span>ABV: {abv}%</span>
          </div>
          <div className="pints">
            {pints}
          </div>
        <button className="button" onClick={this.sellPint}>Buy</button>
        </div>
    )
  }
}

Keg.propTypes = {
  keg: PropTypes.object
};
