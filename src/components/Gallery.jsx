import "../App.css";
import { useState } from "react";
import Slider from "react-slick";
import one from "../Assets/one.jpg";
import two from "../Assets/two.jpg";
import three from "../Assets/three.jpg";
import four from "../Assets/four.jpg";
import five from "../Assets/five.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [one, two, three, four, five];

const Gallery = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft size={30} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <h1 className="flex justify-center text-2xl md:text-4xl font-bold md:ml-10 text-black ">
        IMAGE GALLERY
      </h1>
      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Gallery;
