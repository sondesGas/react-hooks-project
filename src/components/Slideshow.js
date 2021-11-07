import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <img src={img1} alt="img" />
        </div>
        <div className="each-slide">
          <img src={img2} alt="img" />
        </div>
        <div className="each-slide">
          <img src={img3} alt="img" />
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
