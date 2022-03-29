import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left">
        <span>TOT Market</span>
      </div>
      <div className="right">
        <FaShoppingCart className="icon" />
        <div className="badge-container">
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
