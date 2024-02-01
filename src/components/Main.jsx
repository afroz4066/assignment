import React from "react";
import HeroSection from "./Hero";

import AboutUs from "./AboutUs";
import Criminal from "./Criminal";
import News from "./News";

const Main = () => {
  return (
    <div>
      <HeroSection />

      <AboutUs />
      <Criminal />
      <News />
    </div>
  );
};

export default Main;
