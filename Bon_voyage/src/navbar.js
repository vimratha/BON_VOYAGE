import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarstyles.css";
import MenuItems from "./menuitem";
function handle(props) {
  return (
    <nav>
      <li>
        <Link className="nav-links" to={props.url} href={props.url}>
          <i className={props.icon1}></i>
          {props.title}
        </Link>
      </li>
    </nav>
  );
}
function Navbar() {
  const [toggleon, setchange] = useState(false);
  function clicked() {
    setchange((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div className="NavbarItems">
      <h1 className="navbar-logo">Bon Voyage</h1>
      <div className="menu-icons" onClick={clicked}>
        <i className={toggleon ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={toggleon ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map(handle)}
      </ul>
    </div>
  );
}
export default Navbar;
