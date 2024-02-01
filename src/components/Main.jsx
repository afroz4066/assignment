import React from "react";
import HeroSection from "./Hero";

import AboutUs from "./AboutUs";
import Criminal from "./Criminal";
import News from "./News";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Gallery from "./Gallery";
const Main = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      {/* <AboutUs /> */}

      <Gallery />
      <Criminal />
      <News />
      <Footer />
    </>
  );
};

export default Main;
