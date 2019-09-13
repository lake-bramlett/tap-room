import React from "react";
import Keg from "./Keg";

const KegList = (props) => {
  return (
    <div>
     {this.props.kegsList.map((keg, index) => (
       <Keg keg={keg} key={index}/>
     ))}
    </div>
  );
}


export default KegList;
