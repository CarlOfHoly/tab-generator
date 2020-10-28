import React from "react";
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <DrawerComponent />
        <div className="login">login</div>
      </div>
    </div>
  );
};

export default Header;
