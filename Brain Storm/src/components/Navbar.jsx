import React from "react";
import "./Navbar.css";
import Icon from "../assets/icon.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="icon-container">
          <img src={Icon} alt="app-icon" className="icon" />
        </div>
        <h1>Brain Storm</h1>
      </nav>
    </>
  );
};

export default Navbar;
