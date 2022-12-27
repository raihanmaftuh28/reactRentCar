import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const inRentCar = props.in;

  if (inRentCar) {
    return (
      <div className="mt-[110px] mr-[90px] ml-[90px] flex justify-items-end space-x-4 ">
        <div className="w-1/2  flex items-center">
          <div className="space-y-4">
            <h1 className="text-[36px] font-bold ">
              Sewa & Rental Mobil Terbaik di Kawasan Penajam
            </h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebtuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
        </div>
        <div className="w-1/2 ">
          <img src={require("../Assets/img_car.png")}></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-[110px] mr-[90px] ml-[90px] flex justify-items-end space-x-4 ">
        <div className="w-1/2  flex items-center">
          <div className="space-y-4">
            <h1 className="text-[36px] font-bold ">
              Sewa & Rental Mobil Terbaik di Kawasan Penajam
            </h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebtuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link
              to="/rent-car"
              className=" block w-[150px] text-[14px] bg-green-500 text-slate-100 px-4 py-2 rounded-lg"
            >
              Mulai sewa mobil
            </Link>
          </div>
        </div>
        <div className="w-1/2 ">
          <img src={require("../Assets/img_car.png")}></img>
        </div>
      </div>
    );
  }
}
