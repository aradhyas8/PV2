
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container navbar">
      <nav className="VerticalNavbar">
        <ul className="Navbar-list">
          <li className="Navbar-item">
            <button class="custom-btn">
              About
            </button>
          </li>
          <li className="Navbar-item">
            <button  class="custom-btn">
              Experience
            </button>
          </li>
          <li className="Navbar-item">
            <button class="custom-btn">
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;