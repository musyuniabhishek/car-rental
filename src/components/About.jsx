import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../assets/images/about.jpg";
import about1 from "../assets/images/about-1.png";
import about2 from "../assets/images/about-2.png";
import about3 from "../assets/images/about-3.png";
import extra1 from "../assets/images/extra1.png";
import extra2 from "../assets/images/extra2.png";
import extra3 from "../assets/images/extra3.png";

export default function About() {
  return (
    <>
      {/* ------- Breadcrumb start --------- */}
      <div className="bg-breadcrumb">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-text">
              <h3>About</h3>
              <p>
                <Link to="/">Home</Link> / About
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Breadcrumb end --------- */}

      <div className="container mt-5">
        <div className="row about">
          <div className="col-lg-6 m-auto">
            <div className="about-img">
              <img src={aboutimg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-text">
              <h3 className="mb-2">About Company</h3>
              <h4 className="mb-3">
                You start the engine and your adventure begins
              </h4>
              <p className="mb-3">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>

              <div className="about-logo my-5">
                <div className="logo-box ">
                  <img src={about1} alt="" />
                  <div className="text my-2">
                    <h4>20</h4>
                    <p>Car Types</p>
                  </div>
                </div>
                <div className="logo-box ">
                  <img src={about2} alt="" />
                  <div className="text my-2">
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </div>
                </div>
                <div className="logo-box ">
                  <img src={about3} alt="" />
                  <div className="text my-2">
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="plan">
          <div className="plan-text text-center">
            <p>Plan your trip now</p>
            <h3>Quick & easy car rental</h3>
          </div>
          <div className="plan-box">
            <div className="box">
              <img src={extra1} alt="" />
              <h4>Select Car</h4>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="box">
              <img src={extra2} alt="" />
              <h4>Contact Operator</h4>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="box">
              <img src={extra3} alt="" />
              <h4>Let`s Drive</h4>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
