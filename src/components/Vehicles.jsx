import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarStore } from "../store/carstore";
import alto from "../assets/images/alto.jpg";
export default function Vehicles() {
  const { value } = useContext(CarStore);
  var data = value.vehicals;
  return (
    <>
      {/* ------- Breadcrumb start --------- */}
      <div className="bg-breadcrumb">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-text">
              <h3>Our Vehicles</h3>
              <p>
                <Link to="/">Home</Link> / Vehicles
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Breadcrumb end --------- */}

      <div className="container my-5">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 mb-5" key={index}>
                <div className="vehicle-box">
                  <div className="vehicle-img mb-3">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="vehicle-details">
                    <div className="main-box mb-2">
                      <h3>{item.name}</h3>
                      <p>
                        <span> &#8377; {item.price}</span> / per Day
                      </p>
                    </div>
                    <div className="extra-box mb-2">
                      <p>{item.brand}</p>
                      <p>{item.seat} Seat</p>
                    </div>
                    <div className="extra-box">
                      <p>{item.transmission}</p>
                      <p>{item.fuel}</p>
                    </div>

                    <hr />

                    <button className="btn my-3 w-100">Book Ride</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
