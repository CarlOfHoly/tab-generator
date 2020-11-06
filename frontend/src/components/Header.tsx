import React from "react";
import DrawerComponent from "./DrawerComponent";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <DrawerComponent />
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
