import React, { useState } from "react";
import LoginOverlay from "./LoginOverlay";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
  const [side, setSide] = useState(false);

  const changeSide = () => {
    setSide((prevSide) => !prevSide);
  };

  return (
    <div className="login-page">
    <div className={"container " + (side ? "right-panel-active" : "")}>
      <SignUp />
      <SignIn />
      <LoginOverlay changeSide={changeSide} />
    </div>
  </div>
  );
};

export default Login;
