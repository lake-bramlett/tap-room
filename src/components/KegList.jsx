import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList() {
  return (
    <div>
    <h3>What's happening?</h3>
     {keglist.map((keg, index) =>

       <Keg name={keg.name}
         brand={keg.brand}
         abv={keg.abv}
         price={keg.price}
         key={index}/>
     )}
    </div>
  );
}


export default Feed
