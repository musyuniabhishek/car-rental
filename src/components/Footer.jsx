import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="my-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-4 col-md-8">
              <div className="content mb-3">
                <ul>
                  <li className="mb-3">
                    <span>CAR</span> Rental
                  </li>
                  <li className="mb-3">
                    We offers a big range of vehicles for all your driving
                    needs. We have the perfect car to meet your needs.
                  </li>
                  <li className="mb-3">
                    <a href="tel:+9149109082">9149109082</a>
                  </li>
                  <li className="mb-3">
                    <a href="mailto:musyunia42@gmail.com">
                      musyunia42@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="content-2 mb-3">
                <ul>
                  <li className="mb-3">COMPANY</li>
                  <li className="mb-3">New York</li>
                  <li className="mb-3">Careers</li>
                  <li className="mb-3">Mobile</li>
                  <li className="mb-3">Blog</li>
                  <li className="mb-3">How we work</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content-2 mb-3">
                <ul>
                  <li className="mb-3">WORKING HOURS</li>
                  <li className="mb-3">Mon - Fri: 9:00AM - 9:00PM</li>
                  <li className="mb-3">Sat: 9:00AM - 19:00PM</li>
                  <li className="mb-3">Sun:Closed</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="content-2 mb-3">
                <ul>
                  <li className="mb-3">Subscription</li>
                  <li className="mb-3">
                    Subscribe your Email address for latest news & updates.
                  </li>
                  <li className="mb-3">
                    {" "}
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                    />{" "}
                  </li>
                  <li className="mb-3">
                    <button className=" btn ">Submit</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
