import React from "react";
import "./HeroSection.css";
import doradesignLogo from "../assets/doradesign_logo.png";
import waveLogo from "../assets/wave_logo.png";
import similaLogo from "../assets/simila_logo.png";
import heroImage from "../assets/Image.png";
import heroImage4 from "../assets/image4.png";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              I AM A{" "}
              <span className="highlight-box">
                <img src={heroImage} alt="3D" className="hero-highlight-img" />
              </span>{" "}
              FREELANCE
              <br />
              DESIGNER{" "}
              <span className="highlight-box">
                <img
                  src={heroImage4}
                  alt="Mobile"
                  className="hero-highlight-img"
                />
              </span>{" "}
              FROM
              <br />
              SAN FRANCISCO
            </h1>

            <div className="hero-description">
              <div className="client-logos">
                <div className="logo-item">
                  <img
                    src={doradesignLogo}
                    alt="Doradesign"
                    className="client-logo"
                  />
                </div>
                <div className="logo-item">
                  <img src={waveLogo} alt="Wave" className="client-logo" />
                </div>
                <div className="logo-item">
                  <img src={similaLogo} alt="Simila" className="client-logo" />
                </div>
              </div>

              <p className="hero-subtitle">
                Welcome to my portfolio. Here, artistry meets functionality.
                Dive into a curated showcase of distinctive branding and web
                designs, each crafted to captivate and inspire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
