import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RentCar() {
  const [carState, setCarState] = useState([]);

  useEffect(() => {
    const getCarList = async () => {
      const carList = await axios.get("http://localhost:1000/car-list");
      setCarState(carList.data.data.getCar);
    };

    getCarList();
  }, []);

  return (
    <div>
      <Navbar />
      <Header in={true}></Header>
      <Filter />
      {/* <div className="  mr-[90px] ml-[90px] flex flex-wrap gap-8  justify-center ">
        {carState.map((car) => {
          if (car.name == "avanza") {
            return (
              <div className="border rounded-lg w-72 p-4 space-y-2">
                <img
                  className="mx-auto"
                  src={car.image}
                  width="160"
                  length="270"
                ></img>
                <h1 className="font-semibold">{car.name}</h1>
                <p className="font-bold">Rp.{car.price} / Hari</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <div className="flex space-x-2 mt-2">
                  <img src={require("../Assets/fi_users.png")} />
                  <p>4 Orang</p>
                </div>
                <div className="flex space-x-2 mt-2">
                  <img src={require("../Assets/fi_settings.png")} />
                  <p>Manual</p>
                </div>
                <div className="flex space-x-2 mt-2">
                  <img src={require("../Assets/fi_calendar.png")} />
                  <p>Tahun 2020</p>
                </div>
              </div>
            );
          }
        })}
      </div> */}
      <Footer />
    </div>
  );
}
