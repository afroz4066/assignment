import React from "react";
import backgroundImage from "../Assets/hero.webp";
import Header from "./Header";
import { FaArrowCircleDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <Header />
      <div
        className="relative bg-cover bg-center h-screen flex items-center text-white mt-[-95px] z-[-1]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold md:ml-20">
            Securing Tomorrow,
            <br />
            Today: Mumbai
            <br />
            <span className="text-orange-500">Police Department</span>
          </h1>

          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded mt-5 cursor-pointer z-10 relative md:ml-20">
            Know More
            <FaArrowCircleDown size={20} />
          </button>
        </div>
      </div>
      <div className=" bg-slate-600 bg-opacity-90  border border-white rounded-full w-[90%] z-10 h-[10vh] relative bottom-20 mx-auto my-auto p-6">
        <h3 className=" font-semi-bold text-white">HEADLINES</h3>
      </div>
    </>
  );
};

export default HeroSection;
