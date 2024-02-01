import React from "react";
import backgroundImage from "../Assets/hero.webp";
import { FaArrowDown, FaGripLinesVertical } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex items-center text-white mt-[-90px] z-[-1]"
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

          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded mt-5 cursor-pointer z-10 relative md:ml-20">
            <div className="flex items-center">
              <span>Know More </span>
              <FaArrowDown />
            </div>
          </button>
        </div>
      </div>
      <div className=" lg:flex hidden">
        <div className="flex bg-slate-600 bg-opacity-90  border border-white rounded-full w-[90%] z-10 h-[10vh] absolute bottom-10 ml-20 p-6 ">
          <h3 className=" font-semi-bold text-white ">HEADLINES </h3>
          <FaGripLinesVertical
            size={20}
            color="white"
            style={{ fontWeight: 300 }}
          />
          <p className="text-xs md:text-sm lg:text-base xl:text-lg md:h-auto">
            &nbsp; &nbsp; &nbsp; &nbsp;दिनांक-21.02.2023 को रोहतास जिला अन्तर्गत
            पुलिस की कार्रवाई एवं उपलब्धि से संबंधित विवरणी दिनांक-01.02.2024 को
            टोहतास जिला दिनांक-01.02.2024 को ..
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
