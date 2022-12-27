import React from "react";

export default function Card(props) {
  <div>
    <div className="border rounded-lg w-72 p-4 space-y-2">
      <img className="mx-auto" src={props.image} width="160" length="270"></img>
      <h1 className="font-semibold">{props.name}</h1>
      <p className="font-bold">Rp.{props.price} / Hari</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
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
  </div>;
}
