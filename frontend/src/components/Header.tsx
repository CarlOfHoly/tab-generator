import React from "react";
import DrawerComponent from "./DrawerComponent";
import { Link } from "react-router-dom";
import {logout} from "../auth";

interface Props {
  authenticated: Boolean
}
const Header:React.FC<Props> = ({authenticated}) => {
  return (
    <div className="header-container">
      <div className="header">
        <DrawerComponent />

        {
          authenticated ? <button onClick={logout}>logout</button>: <Link to="/login">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Header;
