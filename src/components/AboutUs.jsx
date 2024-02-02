import React from "react";
import Aboutus from "../Assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 h-auto">
      <div className="w-full  px-4">
        <div className="flex flex-wrap md:flex-nowrap bg-white mb-6 items-center ">
          {" "}
          <div className="md:w-1/2 rounded-t-lg md:rounded-tr-none md:rounded-bl-lg overflow-hidden">
            <img
              alt="..."
              src={Aboutus}
              className="w-[500px] shadow-xl rounded-lg align-middle h-auto p-5"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h4 className="text-xl font-bold text-black">ABOUT US</h4>
            <p className="text-md font-light mt-2 text-gray-700">
              Rohtas has an old & interesting history. In pre-historic days the
              plateau region of the district has been the abode of aboriginals
              whose chief representatives now are the Bhars, the Cheers and the
              Oraons.Rohtas has an old & interesting history. In pre-historic
              days the plateau region of the district has been the abode of
              aboriginals whose chief representatives now are the Bhars, the
              Cheers and the Oraons. [...]
            </p>
            <button
              className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
