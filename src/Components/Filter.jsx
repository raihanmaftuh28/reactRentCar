import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

export default function Filter() {
  const [nameState, setNameState] = useState();
  const [priceState, setPriceState] = useState();
  const [carState, setCarState] = useState([]);
  const [filteredState, setFilteredState] = useState([]);

  const nameEventHandler = (event) => {
    const value = event.target.value;
    setNameState(value);
  };

  const priceEventHandler = (event) => {
    const value = event.target.value;
    setPriceState(value);
  };

  const onFilter = (event) => {
    // event.preventDefault();
    setFilteredState([]);
    console.log("awal", filteredState);
    carState.map((car) => {
      if (nameState && priceState) {
        console.log("first");
        if (nameState === car.name && car.price < priceState) {
          setFilteredState([...filteredState, car]);
        }
      } else if (nameState && !priceState) {
        if (car.name === nameState) {
          console.log("second");
          setFilteredState([...filteredState, car]);
          console.log("filteredState ", filteredState);
        }
      } else if (priceState && !nameState) {
        if (car.price < priceState) {
          console.log("third");
          setFilteredState([...filteredState, car]);
        }
      } else {
        console.log("fourth");
        setFilteredState([...filteredState, car]);
      }
    });
  };

  useEffect(() => {
    const getCarList = async () => {
      const carList = await axios.get("http://localhost:1000/car-list");
      setCarState(carList.data.data.getCar);
    };

    getCarList();
  }, []);

  return (
    <div className="-translate-y-10 bg-white ">
      <div className="text-[14px] mt-[45px] flex justify-center">
        <div className="flex rounded-lg border-2 py-5 w-fit px-2 shadow-lg justify-center space-x-3">
          {/* <!-- dropdown 1 --> */}
          <div className="">
            <div className="text-slate-500 ">
              <p className="mb-1">Nama Mobil</p>
              <input
                className="border-2 px-4 py-3 rounded-lg mb-1"
                type="text"
                placeholder="Nama"
                onChange={(event) => nameEventHandler(event)}
              ></input>
            </div>
          </div>
          {/* <!-- dropdown 4 --> */}
          <div className="text-slate-500 ">
            <p className="mb-1">Rentang Harga</p>
            <input
              id="jumlah-penumpang"
              type="number"
              placeholder="Harga"
              onChange={(event) => priceEventHandler(event)}
              className="border-2 px-4 py-3 rounded-lg mb-1"
            />
          </div>

          <div className="">
            <button
              className="h-[50px] mt-6 text-[14px] bg-green-300 hover:bg-green-400 hover:text-green-800 px-2 py-1 rounded-lg "
              onClick={(event) => onFilter(event)}
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
      <div className="  mr-[90px] ml-[90px] flex flex-wrap gap-8  justify-center ">
        {filteredState.map((car) => {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
        })}
      </div>
    </div>
  );
}
