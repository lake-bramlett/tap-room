import React, {Component} from 'react'
import PropTypes from "prop-types";
import {Link,Redirect} from 'react-router-dom'

let _name = null;
let _brand = null;
let _abv = null;
let _price = null;

export default class NewKegForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      stateChange: false
    }
  }

  handleNewHomeFormSubmission = (e) => {
    e.preventDefault()
    this.props.onAddKegToList({name: _name.value, brand: _brand.value, abv: _abv.value, price: _price.value})
    this.setState({ stateChange: true })
  }

  render(){

    const stateChange = this.state.stateChange;
    if(stateChange === true) {
      return <Redirect to="/" />
    }

    return (
      <div className="new-keg">
        <form onSubmit={this.handleNewHomeFormSubmission}>
          <label>Name</label>
          <input type='text' className ='name'/>
          <label>Brand</label>
          <input type='text' className ='brand'/>
          <label>ABV</label>
          <input type='number' className ='abv'/>
          <label>Price</label>
          <input type='number' className ='price'/>
          <button className="add-button" type='submit'>Add a keg</button>
        </form>
      </div>
    )
  }
}

NewKegForm.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
};
