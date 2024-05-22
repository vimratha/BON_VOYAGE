import React from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import hero2 from "../2.jpg";
import Footer from "../footer";
import Contactform from "./contactform";
function Contact() {
  return (
    <div>
      <div className="navbar1">
        <Navbar />
      </div>
      <div className="bodmain">
        <Hero
          key="4"
          cname="hero-mid"
          heroImg={hero2}
          title="Contact"
          btnClass="about1"
        />
        <Contactform />
        <Footer />
      </div>
    </div>
  );
}
export default Contact;
