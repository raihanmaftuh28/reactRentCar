import React from "react";

export default function Dropdown() {
  const showDrop = (event) => {
    event.preventDefault();
    const tag = event.currentTarget.id + "Item";
    const tagged = document.getElementById(tag);
    tagged.classList.contains("hidden")
      ? tagged.classList.remove("hidden")
      : tagged.classList.add("hidden");
  };
  return (
    <div className="w-1/2 space-y-5">
      <div className="border p-5 ">
        <div className="flex justify-between">
          <p>Berapa hari sebelumnya sebaiknya booking sewa mobil?</p>
          <button onClick={(event) => showDrop(event)} id="firstDrop">
            <img src={require("../Assets/Vector.png")}></img>
          </button>
        </div>
        <div id="firstDropItem" className="hidden">
          makan yang banyak dan minum secukupnya
        </div>
      </div>

      <div className="border p-5 ">
        <div className="flex justify-between">
          <p>Berapa hari minimal sewa mobil lepas kunci?</p>
          <button onClick={(event) => showDrop(event)} id="secondDrop">
            <img src={require("../Assets/Vector.png")}></img>
          </button>
        </div>
        <div id="secondDropItem" className="hidden">
          makan yang banyak dan minum secukupnya
        </div>
      </div>

      <div className="border p-5 ">
        <div className="flex justify-between">
          <p>Berapa hari sebelumnya sebaiknya booking sewa mobil?</p>
          <button onClick={(event) => showDrop(event)} id="thirdDrop">
            <img src={require("../Assets/Vector.png")}></img>
          </button>
        </div>
        <div id="thirdDropItem" className="hidden">
          makan yang banyak dan minum secukupnya
        </div>
      </div>

      <div className="border p-5 ">
        <div className="flex justify-between">
          <p>Aakah ada biaya antar-jemput?</p>
          <button onClick={(event) => showDrop(event)} id="fourthDrop">
            <img src={require("../Assets/Vector.png")}></img>
          </button>
        </div>
        <div id="fourthDropItem" className="hidden">
          makan yang banyak dan minum secukupnya
        </div>
      </div>

      <div className="border p-5 ">
        <div className="flex justify-between">
          <p>Bagaimana jika terjadi kecelakaan?</p>
          <button onClick={(event) => showDrop(event)} id="fifthDrop">
            <img src={require("../Assets/Vector.png")}></img>
          </button>
        </div>
        <div id="fifthDropItem" className="hidden">
          makan yang banyak dan minum secukupnya
        </div>
      </div>
    </div>
  );
}
