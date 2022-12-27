import React from "react";

export default function Footer() {
  return (
    <div className="mt-[110px] mr-[90px] ml-[90px] flex  justify-between mb-[110px]">
      <div className="space-y-4">
        <p>Jalan Suroyo No. 161 Mayangan Kota Penajam 76141</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-444-555-666</p>
      </div>

      <div>
        <ul className="font-bold space-y-4">
          <li>
            <a className="text-[14px]">Our Services</a>
          </li>
          <li>
            <a className="text-[14px]">Why Us</a>
          </li>
          <li>
            <a className="text-[14px]">Testimonial</a>
          </li>
          <li>
            <a className="text-[14px]">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <p>Connect with us</p>
        <ul className="font-bold space-x-4 flex ">
          <li>
            <img src={require("../Assets/icon_facebook.png")} />
          </li>
          <li>
            <img src={require("../Assets/icon_instagram.png")} />
          </li>
          <li>
            <img src={require("../Assets/icon_twitter.png")} />
          </li>
          <li>
            <img src={require("../Assets/icon_mail.png")} />
          </li>
          <li>
            <img src={require("../Assets/icon_twitch.png")} />
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <p>Copyright Binar 2022</p>
        <img src={require("../Assets/logo.png")} />
      </div>
    </div>
  );
}
