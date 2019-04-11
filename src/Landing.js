import React from "react";
import "./landing.scss";
import halfstar from "./assets/half-star.png";
import share from "./assets/share.png";

const Landing = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="horizontal" />
        <div className="vertical" />
        <div className="content">
          <p>
            <span class="icon1">HD</span>Get high quality stock images
          </p>
          <p>
            <span class="icon2">
              <img src={halfstar} />
            </span>
            Rate your own photos
          </p>
          <p>
            <span class="icon3">
              <img src={share} />
            </span>
            Make and share your albums
          </p>
        </div>
      </div>
      <div className="right">
        <header className="login">
          <input className="login-text" />
          <input className="login-text" />
          <button>Log In</button>
        </header>
        <div className="design">
          <p className="logo">All Stock</p>
          <p className="call">All stock photos in one location</p>
        </div>
        <div className="button-holder">
          <button>Sign Up</button>
          <button>Browse as guest</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
