import React from "react";
import image from "../Assets/aboutus.jpg";
const AboutUs = () => {
  return (
    <div className="flex justify-between ">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="p-6 ">
        <h1 className="text-4xl md:text-4xl font-bold md:ml-20">ABOUT US</h1>
        <h3>
          Rohtas has an old & interesting history. In pre-historic days the
          plateau region of the district has been the abode of aboriginals whose
          chief representatives now are the Bhars, the Cheers and the Oraons.
          According to some legends the Kherwars were the original settlers in
          the hilly tracts near Rohtas. The Oraons also claim that they ruled
          over the area between Rohtas and Patna. The local legend also connects
          king Sahasrabahu with Sasaram, the headquarter of Rohtas district. It
          is believed that Sahasrabahu had terrible fight with Saint Parsuram,
          the legendary Brahmin Protector, as a result of which Sahasrabahu was
          killed. The term Sahasram is supposed to have been derived from
          Sahasrabahu and Parsuram. Another legend connects the ROHTAS hill to
          Rohitashwa, son of Raja Harishchandra, a famous king who was known for
          his piety and truthfulness. The District of ROHTAS formed a...
        </h3>
        <button>Read More </button>
      </div>
    </div>
  );
};

export default AboutUs;
