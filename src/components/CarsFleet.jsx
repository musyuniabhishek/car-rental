import React, { useContext, useState } from "react";
import { CarStore } from "../store/carstore";

export default function CarsFleet() {
  const { value } = useContext(CarStore);
  var data = value.carfleet;
  let [active, setActive] = useState(1);
  function handleActive(id) {
    setActive(id);
  }
  return (
    <>
      <div className="container my-4">
        <div className="carfleet-text text-center  m-auto ">
          <h6>Vehicle Models</h6>
          <h4>Our Luxury fleet</h4>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 mb-3">
            <div className="list-group">
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleActive(item.id)}
                    className={`list-group-item  list-group-item-action ${
                      active === item.id && "active"
                    } mb-2 `}
                    aria-current="true"
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mb-3">
            <div className="carfleet-img m-auto">
              <img className="w-100 h-100" src={data[active - 1].img} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-3">
            <div className="table-responsive">
              <table className="table  carfleet-table">
                <tbody>
                  <tr>
                    <th colSpan={2} className="text-center price">
                      <span>&#8377; {data[active - 1].rent}</span> / rent per
                      Day
                    </th>
                  </tr>
                  <tr>
                    <th>Model</th>
                    <td>{data[active - 1].model}</td>
                  </tr>
                  <tr>
                    <th>Mark</th>
                    <td>{data[active - 1].mark}</td>
                  </tr>
                  <tr>
                    <th>Year</th>
                    <td>{data[active - 1].year}</td>
                  </tr>
                  <tr>
                    <th>Doors</th>
                    <td>{data[active - 1].doors}</td>
                  </tr>
                  <tr>
                    <th>Transmission</th>
                    <td>{data[active - 1].transmission}</td>
                  </tr>
                  <tr>
                    <th>Fuel</th>
                    <td>{data[active - 1].fuel}</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <button className="w-100 ">RESERVE NOW</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
