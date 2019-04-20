import React, { useState } from "react";
import "./landing.scss";
import halfstar from "./assets/half-star.png";
import share from "./assets/share.png";
import { Link } from "../node_modules/@reach/router";

const Landing = () => {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
/*
  return (
    <div className="container">
      <div className="left">
        <div className="horizontal" />
        <div className="vertical" />
        <div className="content">
          <p>
            <span className="icon1">HD</span>Get high quality stock images
          </p>
          <p>
            <span className="icon2">
              <img src={halfstar} alt="star icon" />
            </span>
            Rate your own photos
          </p>
          <p>
            <span className="icon3">
              <img src={share} alt="share icon" />
            </span>
            Make and share your albums
          </p>
        </div>
      </div>
      <div className="right">
        <header className="login">
          <input
            className="login-text"
            value={email}
            onChange={e => {
              console.log("In login");
              setEmail(e.target.value);
            }}
            onClick={e => {
              if (e.target.value == "Email") {
                setEmail("");
              }
            }}
            onBlur={e => {
              if (e.target.value == "") {
                setEmail("Email");
              }
            }}
          />
          <input
            className="login-text"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            onClick={e => {
              if (e.target.value == "Password") {
                setPassword("");
              }
            }}
            onBlur={e => {
              if (e.target.value == "") {
                setPassword("Password");
              }
            }}
          />
          <button>Log In</button>
        </header>
        <div className="design">
          <p className="logo">All Stock</p>
          <p className="call">All stock photos in one location</p>
        </div>
        <div className="button-holder">
          <button>Sign Up</button>
          <Link to="/Search">
            <button>Browse as guest</button>
          </Link>
        </div>
      </div>
    </div>
  );
*/

  return (
  <div className="container">
    <div className="left">

      <div className="left-top"></div>
      <div className="left-bot">
        <div className="vertical-bar"></div>
        <div className="content">
          <table>
            <tbody>
            <tr>
              <td className="col1row1 col1">HD</td>
              <td className="col2row1">Get high quality stock images</td>
            </tr>

            <tr>
              <td className="col1row2 col1"><img src={halfstar} alt="star icon" className="icon"/></td>
              <td className="col2row2">Rate your own photos</td>
            </tr>

            <tr>
              <td className="col1row3 col1"><img src={share} alt="share icon" className="icon"/></td>
              <td className="col2row3">Make and share your albums</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
    <div className="right">
      <div className="right-top">
        <input className="login-name"
           value={email}
           onChange={e => {
             console.log("In login");
             setEmail(e.target.value);
           }}
           onClick={e => {
             if (e.target.value == "Email") {
             setEmail("");
            }
           }}
           onBlur={e => {
             if (e.target.value == "") {
             setEmail("Email");
            }
           }}
        />
        <input className="login-pass"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          onClick={e => {
            if (e.target.value == "Password") {
              setPassword("");
            }
          }}
          onBlur={e => {
            if (e.target.value == "") {
              setPassword("Password");
            }
          }}
        />
        <button>Login</button>
      </div>
      <div className="right-mid">
        <div className="logo">All<br/>Stock</div>
        <div className="tagline">All stock photos in one location</div>
      </div>
      <div className="right-bot">
        <button className="SignUp">Sign Up</button>
        <Link to="/Search" style={{ textDecoration: 'none'}}><button className="BrowseGuest">Browse as guest</button></Link>
      </div>
    </div>
  </div>
  );

};


export default Landing;
