import React from "react";
import { wood_hammer, star } from "../../assets";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero wrapper">
      <div className="wrapper-inner">
        <h1 className="title">Quinn Woodcrafting</h1>
        <hr />
        <p className="headline">
          Where Your Ideas Meet Our Chisels: Custom Wood Artistry.
        </p>
        <div className="stars" aria-hidden="true">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div className="image-hero">
        </div>
      </div>
    </div>
  );
};

export default Hero;
