import React from "react";
import './App.scss'
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";


const App = () => {
  return (
    <div className="App">
      <div className="split-screen">
        <div className="left-pane">
          <Header />

        </div>
        <div className="right-pane">
          <About />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default App;
