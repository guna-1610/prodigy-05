import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/bk408/PRODIGY_WD_02" target="_blank" rel="noreferrer">
          Download Source Code
        </a>{" "}
        | Developed by <a href="">Bhavya Khatri</a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
