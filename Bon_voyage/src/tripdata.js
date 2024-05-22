import React from "react";
import "./tripstyles.css";
function Tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-img">
        <img alt="card" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default Tripdata;
