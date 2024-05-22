import React from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import hero1 from "../night.jpg";
import Footer from "../footer";
import Trip from "../trip";
function Service() {
  return (
    <div>
      <div className="navbar1">
        <Navbar />
      </div>
      <div className="bodmain">
        <Hero
          key="3"
          cname="hero-mid"
          heroImg={hero1}
          title="Service"
          btnClass="about1"
        />
        <Trip />
        <Footer />
      </div>
    </div>
  );
}
export default Service;
