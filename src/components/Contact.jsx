import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      {/* ------- Breadcrumb start --------- */}
      <div className="bg-breadcrumb">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-text">
              <h3>Contact</h3>
              <p>
                <Link to="/">Home</Link> / Contact
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Breadcrumb end --------- */}

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className="contact-text">
              <h3>Need additional informaiton ?</h3>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="tel:+9149109082"> 9149109082</a>
              <a href="mailto:musyunia42@gmail.com">musyunia42@gmail.com</a>
              <a href="">Noida U.P</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <form>
                <div className="mb-4">
                  <label className="mb-2">
                    Full Name <b>*</b>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Your Full Name :"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-2">
                    Email <b>*</b>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Your Email Address :"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-2">
                    Tell us about it <b>*</b>
                  </label>
                  <textarea
                    name="about"
                    cols="30"
                    rows="8"
                    className="form-control"
                    placeholder="Write here ..."
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button className="w-100 btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
