import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="logo-container">{/* Logo image goes here */}</div>
      <div className="headshot-container">
        {/* Professional headshot image goes here */}
      </div>
      <div className="welcome-message">
        <p>Welcome to my portfolio!</p>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default LeftPanel;
