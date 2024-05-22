import React from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import hero from "../12.jpg";
import "../../src/navbarstyles.css";
import Destination from "../destination";
import Trip from "../trip";
import Footer from "../footer";
function Home() {
  return (
    <div>
      <div className="navbar1">
        <Navbar />
      </div>
      <div className="bodmain">
        <Hero
          key="1"
          cname="hero"
          heroImg={hero}
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination."
          buttonText="Travel Plan"
          url="/"
          btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
