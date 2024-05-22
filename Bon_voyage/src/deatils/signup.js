import React from "react";
import Navbar from "../navbar";
import sign from "../11.jpg";
import Hero from "../hero";
import Footer from "../footer";
import Signupp from "./signupp";
function Signup() {
  return (
    <div>
      <div className="navbar1">
        <Navbar />
      </div>
      <div className="bodmain">
        <Hero
          key="4"
          cname="hero2"
          heroImg={sign}
          title="Sign Up"
          btnClass="about1"
        />
        <Signupp />
        <Footer />
      </div>
    </div>
  );
}
export default Signup;
