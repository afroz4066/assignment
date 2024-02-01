import React from "react";
import EmblemImage from "../Assets/serviceimage.png";
import Card1 from "./Card1";

const Services = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mx-10 p-2">
          OUR SERVICES
        </h1>

        <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 min-h-screen flex flex-col items-center justify-center">
          <div className="">
            <div className="flex justify-center gap-0 relative z-10 flex-col md:flex-row lg:gap-[300px]">
              <div>
                <Card1 />
              </div>
              <div>
                <Card1 />
              </div>
            </div>
            <div className="flex justify-center gap-0 relative z-10 flex-col md:flex-row lg:gap-[500px]">
              <div>
                <Card1 />
              </div>
              <div>
                <Card1 />
              </div>
            </div>
            <div className="flex justify-center gap-0 relative z-10 flex-col md:flex-row lg:gap-[500px]">
              <div>
                <Card1 />
              </div>
              <div>
                <Card1 />
              </div>
            </div>
            <div className="flex justify-center gap-0 relative z-10 flex-col md:flex-row lg:gap-[300px]">
              <div>
                <Card1 />
              </div>
              <div>
                <Card1 />
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-58 mx-auto absolute mb-[30px]">
            <img src={EmblemImage} alt="Emblem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
