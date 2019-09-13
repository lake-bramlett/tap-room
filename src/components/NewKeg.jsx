import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

let _name = null;
let _style = null;
let _brand = null;
let _abv = null;
let _price = null;

export default class NewKeg extends Component {

  constructor(props){
    super(props)
    this.state = {
      stateChange: false
    }
  }

  handleNewKegFormSubmission = (e) => {
    e.preventDefault()
    this.props.callback({name: _name.value,
                         stlye: _style.value,
                         brand: _brand.value,
                         abv: _abv.value,
                         price: _price.value,
                         pints: 126})
    this.setState({ stateChange: true })
  }

  render(){

    const stateChange = this.state.stateChange;
    if(stateChange === true) {
      return <Redirect to="/" />
    }

    return (
        <div className="newkegs">
          <h3>Tap a new Keg</h3>
          <div className="keg-form">
            <form onSubmit={this.handleNewKegFormSubmission}>
              <input
              type='text'
              id='name'
              placeholder='name'
              ref={(input) => {_name= input;}}/>
              <input
              type='text'
              id='style'
              placeholder='style'
              ref={(input) => {_style= input;}}/>
              <input
              type='text'
              id='brand'
              placeholder='brand'
              ref={(input) => {_brand = input;}}/>
              <input
              type='number'
              id='abv'
              placeholder='abv'
              ref={(input) => {_abv = input;}}/>
              <input
              type='number'
              id='price'
              placeholder='price'
              ref={(input) => {_price= input;}}/>
              <div className="center">
              <button className="form-btn" type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

NewKeg.propTypes = {
  callback: PropTypes.func
};
