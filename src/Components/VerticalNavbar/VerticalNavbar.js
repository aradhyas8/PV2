import React from 'react';
import './VerticalNavbar.scss';

const VerticalNavbar = () => {
  return (
    <nav className="VerticalNavbar">
      <ul className="Navbar-list">
        <li className="Navbar-item"><a href="#projects" className="Navbar-link">Projects</a></li>
        <li className="Navbar-item"><a href="#experience" className="Navbar-link">Experience</a></li>
        <li className="Navbar-item"><a href="#about" className="Navbar-link">About</a></li>
      </ul>
    </nav>
  );
};

export default VerticalNavbar;