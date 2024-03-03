import React from "react";
import { Link } from "react-router-dom";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import team5 from "../assets/images/team5.png";
import team6 from "../assets/images/team6.png";
export default function OurTeam() {
  return (
    <>
      {/* ------- Breadcrumb start --------- */}
      <div className="bg-breadcrumb">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-text">
              <h3>Our Team</h3>
              <p>
                <Link to="/">Home</Link> / Our team
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Breadcrumb end --------- */}

      <div className="container my-5">
        <div className="row w-75 m-auto">
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="team-box ">
              <div className="team-img">
                <img src={team1} alt="" />
              </div>
              <div className="team-text text-center">
                <h3>Luke Miller</h3>
                <p>Salesman</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="team-box ">
              <div className="team-img">
                <img src={team2} alt="" />
              </div>
              <div className="team-text text-center">
                <h3>Michael Diaz </h3>
                <p>Business Owner</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="team-box ">
              <div className="team-img">
                <img src={team3} alt="" />
              </div>
              <div className="team-text text-center">
                <h3>Briana Ross</h3>
                <p>Photographer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="team-box ">
              <div className="team-img">
                <img src={team4} alt="" />
              </div>
              <div className="team-text text-center">
                <h3>Lauren Rivera</h3>
                <p>Car Deatilist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="team-box ">
              <div className="team-img">
                <img src={team5} alt="" />
              </div>
              <div className="team-text text-center">
                <h3>Martin Rizz</h3>
                <p>Mechanic</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="team-box ">
              <div className="team-img">
                <img src={team6} alt="" />
              </div>
              <div className="team-text text-center">
                <h3>Caitlyn Hunt</h3>
                <p>Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
