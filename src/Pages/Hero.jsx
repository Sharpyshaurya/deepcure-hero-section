import React from "react";
import "./Hero.css";
import HeroPic from "../Images/Hero.png";
function Hero() {
  return (
    <div className="section">
      <div className="sectionWrapper">
        <div className="left-semi-circle"></div>
        <div className="heading">
          <p>Virtual Healthcare when you need it most</p>
        </div>
        <div className="sub-heading">
          <p>For Anyone, Anywhere and at Anytime</p>
        </div>
        <div className="join-button">
          <button type="submit">Join Us</button>
        </div>
        <img className="hero-pic" src={HeroPic} alt="" />
      </div>
    </div>
  );
}

export default Hero;
