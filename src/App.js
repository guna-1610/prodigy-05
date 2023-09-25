import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">Download Source Code</a> | Developed by{" "}
        <a target="_blank" href="https://github.com/bk408/PRODIGY_WD_02">
          Bhavya Khatri
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
