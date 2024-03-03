import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  let [activeItem, setActiveItem] = useState("home");

  function handleActive(item) {
    setActiveItem(item);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg mb-5">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Car-O-Bar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => handleActive("home")}
                  className={` nav-link ${
                    activeItem === "home" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  onClick={() => handleActive("about")}
                  className={`nav-link ${
                    activeItem === "about" ? "active" : ""
                  }`}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/vehicles"
                  onClick={() => handleActive("vehicles")}
                  className={`nav-link ${
                    activeItem === "vehicles" ? "active" : ""
                  }`}
                >
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/testimonials"
                  onClick={() => handleActive("testimonials")}
                  className={`nav-link ${
                    activeItem === "testimonials" ? "active" : ""
                  }`}
                >
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/team"
                  onClick={() => handleActive("team")}
                  className={`nav-link ${
                    activeItem === "team" ? "active" : ""
                  }`}
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  onClick={() => handleActive("contact")}
                  className={`nav-link ${
                    activeItem === "contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
