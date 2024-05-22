import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./deatils/home";
import About from "./deatils/about";
import Contact from "./deatils/contact";
import Service from "./deatils/service";
import Signup from "./deatils/signup";

function Approuter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Approuter;
