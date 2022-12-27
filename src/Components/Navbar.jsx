import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <section id="navbar">
        <nav class=" mr-[90px] ml-[90px] flex justify-between mt-7">
          <div>
            <Link to="/">
              <img src={require("../Assets/logo.png")} />
            </Link>
          </div>
          <ul class="flex gap-x-4 items-center">
            <li>
              <a class="text-[14px]">Our Services</a>
            </li>
            <li>
              <a class="text-[14px]">Why Us</a>
            </li>
            <li>
              <a class="text-[14px]">Testimonial</a>
            </li>
            <li>
              <a class="text-[14px]">FAQ</a>
            </li>
            <li>
              <button class="text-[14px] bg-green-500 px-4 py-2 rounded-lg text-slate-100">
                Register
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
