import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

var kegs = [
  {
    name: "Pils",
    brand: "Breakside",
    abv: 5,
    price: 6,
  },
];

function KegList() {
  return (
    <div>
     {kegs.map((keg, index) =>

       <Keg name={keg.name}
         brand={keg.brand}
         abv={keg.abv}
         price={keg.price}
         key={index}/>
     )}
    </div>
  );
}


export default KegList;
