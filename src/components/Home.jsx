import React from "react";
import hero from "../assets/images/hero.png";
import herobg from "../assets/images/hero-bg.png";
import extra1 from "../assets/images/extra1.png";
import extra2 from "../assets/images/extra2.png";
import extra3 from "../assets/images/extra3.png";
import playstore from "../assets/images/playstore.png";
import appstore from "../assets/images/appstore.png";
import client1 from "../assets/images/client1.jpg";
import CarsFleet from "./CarsFleet";
export default function Home() {
  return (
    <>
      <div className="container hero-container">
        <img src={herobg} className="hero-bg" alt="" />
        <div className=" hero-content d-flex">
          <div className="hero-text">
            <h5>Plan your trip now</h5>
            <h1>
              Save <span>big</span> with our car rental
            </h1>
            <p className="my-3">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="hero-btn mt-4">
              <button className="btn btn1 mx-2">Book now</button>
              <button className="btn btn2 mx-2">Learn more</button>
            </div>
          </div>
          <div className="hero-img d-none d-lg-block">
            <img src={hero} alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>

      <div className="container booking-container ">
        <div className="car-book">
          <h4>Book a car</h4>
          <form>
            <div className="row">
              <div className=" col-lg-4 col-md-6">
                <label className="label my-3">Select Your Car Type</label>
                <select className="form-select p-2" name="car">
                  <option value="0">Select Your Car Type</option>
                </select>
              </div>
              <div className=" col-lg-4 col-md-6">
                <label className="label my-3">Pick Up</label>
                <select className="form-select p-2" name="pick">
                  <option value="0">Select Pick-up location</option>
                </select>
              </div>
              <div className=" col-lg-4 col-md-6">
                <label className="label my-3">Drop Off</label>
                <select className="form-select p-2" name="drop">
                  <option value="0">Select Drop-off location</option>
                </select>
              </div>

              <div className=" col-lg-4 col-md-6">
                <label className="label my-3">Pick Up</label>
                <input
                  type="date"
                  name="pickDate"
                  className="form-control p-2"
                />
              </div>
              <div className=" col-lg-4 col-md-6">
                <label className="label my-3">Drop Off</label>
                <input
                  type="date"
                  name="dropDate"
                  className="form-control p-2"
                />
              </div>
              <div className=" col-lg-4 col-md-6">
                <button className="btn w-100 btn-danger searchBtn p-2">
                  Search
                </button>
              </div>
            </div>
          </form>
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
      <CarsFleet />
      <div className="container-fluid my-3">
        <div className="banner text-center text-light py-5">
          <h2>Save big with our cheap car rental</h2>
          <p>
            Top Airport.Local Suppliers. <span>24/7</span> Support
          </p>
        </div>
      </div>
      <div className="container-fluid testimonials py-5 px-2">
        <div className="testimonials-header text-center  m-auto">
          <h6 className="mb-2">Reviewed by People</h6>
          <h3 className="mb-4">Client's Testimonials</h3>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className=" container mt-5 mb-3 testimonials-box">
          <div className="row">
            <div className="col-md-6">
              <div className="client-box mb-3">
                <p className="">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="client-name d-flex">
                  <img src={client1} alt="" />
                  <div className="text m-auto">
                    <h5>James Paul</h5>
                    <p>California</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="client-box">
                <p className="">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="client-name d-flex w-75">
                  <img src={client1} alt="" />
                  <div className="text m-auto">
                    <h5>James Paul</h5>
                    <p>California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-3">
        <div className="appbanner  ">
          <div className="container">
            <div className="text">
              <h2>Download our app to get most out of it</h2>
              <p>
                Thrown shy denote ten ladies though ask saw. Or by to he going
                think order event music. Incommode so intention defective at
                convinced. Led income months itself and houses you.
              </p>
            </div>
            <div className="download-btn d-flex justify-content-betwen align-items-baseline">
              <img src={playstore} alt="" height="70px" width="200px" />
              <img src={appstore} alt="" height="60px" width="200px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
