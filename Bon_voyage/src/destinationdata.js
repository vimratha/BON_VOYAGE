import React from "react";

import "./destinationstyless.css";
function Destinationdata(props) {
  return (
    <div className={props.classname}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="imag1">
        <img alt="taal" src={props.img1} />
        <img alt="taal1" src={props.img2} />
      </div>
    </div>
  );
}
export default Destinationdata;
