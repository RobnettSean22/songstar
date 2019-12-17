import React from "react";
import Login from "../LoginReg/Login";
import sax from "../../Assests/saxem.jpg";
import "./Landing.scss";

function Landing(props) {
  return (
    <div className="landing-container">
      <div className="login-container">
        <Login />
      </div>
      <div className="saxem-container">
        <img src={sax} alt="sax" />
      </div>
    </div>
  );
}
export default Landing;
