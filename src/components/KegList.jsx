import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

var kegs = [
  {
    name: "Tim",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue."
  },
];

function KegList() {
  return (
    <div>
    <h3>What's happening?</h3>
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
