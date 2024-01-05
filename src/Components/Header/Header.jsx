import React from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="parent header">
      <div className="container header-page">
        <div className="Header">
          <h1 className="Header-main">Aradhya Singh</h1>
          <h2 className="Header-sub">I like to solve problems</h2>
          <h3 className="Header-three">
            {" "}
            I'm a software developer, bringing ideas to life with code.
          </h3>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
