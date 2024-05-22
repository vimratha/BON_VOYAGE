import "./contactformstyles.css";
import React from "react";
function Contactform() {
  return (
    <div className="cc">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Contactform;
