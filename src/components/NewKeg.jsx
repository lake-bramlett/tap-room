import React from 'react';

function NewKeg(){
  return (
    <div className="new-keg">
      <form>
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
  );
}



export default NewKeg;
