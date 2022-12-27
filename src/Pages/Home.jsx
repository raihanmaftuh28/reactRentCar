import React from "react";
import Navbar from "../Components/Navbar";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <Header in={false}></Header>

      <div className="mt-[110px] mr-[90px] ml-[90px] flex justify-items-end space-x-4">
        <div className="w-1/2 ">
          <img src={require("../Assets/img_service.png")}></img>
        </div>
        <div className="w-1/2  flex items-center">
          <div className="space-y-4">
            <h2 className="text-[24px] font-bold ">
              Best Car Rental for any kind of trip in Penajam
            </h2>
            <p>
              Sewaa mobil di penajam bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="text-[14px] flex space-x-4">
              <img src={require("../Assets/centang.png")}></img>
              <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="text-[14px] flex space-x-4">
              <img src={require("../Assets/centang.png")}></img>
              <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div className="text-[14px] flex space-x-4">
              <img src={require("../Assets/centang.png")}></img>
              <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="text-[14px] flex space-x-4">
              <img src={require("../Assets/centang.png")}></img>
              <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="text-[14px] flex space-x-4">
              <img src={require("../Assets/centang.png")}></img>
              <p>Layanan Airport Transfer/Drop in Out</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[110px] mr-[90px] ml-[90px] space-y-4">
        <h1 className="text-[36px] font-bold ">Why Us?</h1>
        <p>Mengapa harus pilih Binar Car Rental</p>
        <div className="flex space-x-4 ">
          <div className="border rounded-2xl p-4 space-y-4 ">
            <img src={require("../Assets/icon_complete.png")}></img>
            <h2 className="text-[24px] font-bold ">Mobil Lengkap</h2>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="border rounded-2xl p-4 space-y-4 ">
            <img src={require("../Assets/icon_price.png")}></img>
            <h2 className="text-[24px] font-bold ">Harga Murah</h2>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="border rounded-2xl p-4 space-y-4 ">
            <img src={require("../Assets/icon_24hrs.png")}></img>
            <h2 className="text-[24px] font-bold ">Layanan 24 Jam</h2>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu.
            </p>
          </div>
          <div className="border rounded-2xl p-4 space-y-4 ">
            <img src={require("../Assets/icon_professional.png")}></img>
            <h2 className="text-[24px] font-bold ">Sopir Professional</h2>
            <p>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[110px] mr-[90px] ml-[90px] bg-blue-700 space-y-10 py-10 rounded-lg">
        <h1 className="text-[36px] font-bold text-white text-center">
          Sewa Mobil di Penajam Sekarang
        </h1>
        <p className="text-center text-white  mx-[200px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="text-[14px] bg-green-500 px-4 py-2 rounded-lg flex mx-auto text-slate-100 font-semibold">
          Mulai sewa mobil
        </button>
      </div>

      <div className="mt-[110px] mr-[90px] ml-[90px] flex">
        <div className="w-1/2">
          <h1 className="text-[36px] font-bold">Frequently Asked Questions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <Dropdown />
      </div>
      <Footer />
    </div>
  );
}
