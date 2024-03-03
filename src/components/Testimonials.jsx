import React from "react";
import client1 from "../assets/images/client1.jpg";
import { Link } from "react-router-dom";
export default function Testimonials() {
  return (
    <>
      {/* ------- Breadcrumb start --------- */}
      <div className="bg-breadcrumb">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-text">
              <h3>Testimonials</h3>
              <p>
                <Link to="/">Home</Link> / Testimonials
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Breadcrumb end --------- */}
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
    </>
  );
}
