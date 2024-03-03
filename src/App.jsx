import React from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Store from "./store/carstore";
import Footer from "./components/Footer";
import About from "./components/About";
import Vehicles from "./components/Vehicles";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Store>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Store>
        <Footer />
      </BrowserRouter>
    </>
  );
}
