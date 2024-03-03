import { createContext } from "react";
import thar from "../assets/images/thar.png";
import safari from "../assets/images/safari.webp";
import fortuner from "../assets/images/fortuner.png";
import audi from "../assets/images/audi.png";
import bmw from "../assets/images/bmw.png";
import mercedes from "../assets/images/mercedes.png";

import alto from "../assets/images/alto.jpg";
import polo from "../assets/images/polo.jpg";
import swift from "../assets/images/swift.jpg";
import ertiga from "../assets/images/ertiga.jpg";
import innova from "../assets/images/innova.jpg";
import verna from "../assets/images/verna.jpg";
import thar1 from "../assets/images/thar.jpg";
import safari1 from "../assets/images/safari.jpg";
import fortuner1 from "../assets/images/fortuner.jpg";
import audi1 from "../assets/images/audi.jpg";
import bmw1 from "../assets/images/bmw.jpg";
import mercedes1 from "../assets/images/mercedes.jpg";

export const CarStore = createContext();
var carfleet = [
  {
    id: 1,
    name: "Mahindra Thar",
    img: thar,
    rent: 3000,
    model: "Thar",
    mark: "Mahindra",
    year: "2020",
    doors: "2/3",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 2,
    name: "Tata Safari",
    img: safari,
    rent: 4000,
    model: "Safari",
    mark: "Tata",
    year: "2023",
    doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 3,
    name: "Toyota Fortuner",
    img: fortuner,
    rent: 5000,
    model: "Fortuner",
    mark: "Toyota",
    year: "2019",
    doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Audi A1",
    img: audi,
    rent: 6000,
    model: "A1",
    mark: "Audi",
    year: "2021",
    doors: "4/5",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "BMW X3",
    img: bmw,
    rent: 7000,
    model: "X3",
    mark: "BMW",
    year: "2022",
    doors: "4/5",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 6,
    name: "Mercedes C class",
    img: mercedes,
    rent: 8000,
    model: "C class",
    mark: "Mercedes",
    year: "2024",
    doors: "4/5",
    transmission: "Automatic",
    fuel: "Petrol",
  },
];

var vehicals = [
  {
    id: 1,
    name: "Alto k10",
    img: alto,
    brand: "Maruti Suzuki",
    price: 900,
    seat: 4,
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 2,
    name: "vw Polo",
    img: polo,
    brand: "Volkswagon",
    price: 1000,
    seat: 4,
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 3,
    name: "Swift",
    img: swift,
    brand: "Maruti Suzuki",
    price: 1200,
    seat: 4,
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 4,
    name: "verna",
    img: verna,
    brand: "Hyundai",
    price: 1500,
    seat: 4,
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Ertiga",
    img: ertiga,
    brand: "Maruti Suzuki",
    price: 2000,
    seat: 6,
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 6,
    name: "Innova",
    img: innova,
    brand: "Toyota",
    price: 2500,
    seat: 6,
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 7,
    name: "Thar",
    img: thar1,
    brand: "Mahindra",
    price: 3000,
    seat: 4,
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 8,
    name: "Safari",
    img: safari1,
    brand: "Tata",
    price: 4000,
    seat: 6,
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 9,
    name: "Fortuner",
    img: fortuner1,
    brand: "Toyota",
    price: 5000,
    seat: 6,
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    id: 10,
    name: "Audi A1",
    img: audi1,
    brand: "Audi",
    price: 6000,
    seat: 4,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 11,
    name: "BMW X3",
    img: bmw1,
    brand: "BMW",
    price: 7000,
    seat: 4,
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    id: 12,
    name: "C Class",
    img: mercedes1,
    brand: "Mercedes",
    price: 8000,
    seat: 4,
    transmission: "Automatic",
    fuel: "Petrol",
  },
];
export default function Store({ children }) {
  const value = {
    carfleet,
    vehicals,
  };
  return <CarStore.Provider value={{ value }}>{children}</CarStore.Provider>;
}
