import React from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import hero1 from "../night.jpg";
import Footer from "../footer";
import Aboutus from "./aboutus";
function About() {
  return (
    <div>
      <div className="navbar1">
        <Navbar />
      </div>
      <div className="bodmain">
        <Hero
          key="2"
          cname="hero-mid"
          heroImg={hero1}
          title="About"
          btnClass="about1"
        />
        <Aboutus />
        <Footer />
      </div>
    </div>
  );
}
export default About;
