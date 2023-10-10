import React from "react";
import { testimonial_background, star } from "../../assets";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
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
      <img
        className="image-hero"
        src={testimonial_background}
        alt=""
      />
    </div>
  );
};

export default Hero;
