import React from "react";
import ThemedButton from "../ThemedButton";

interface IOverlay {
  changeSide: () => void;
}

const LoginOverlay = ({ changeSide }: IOverlay) => {
  return (
    <div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login</p>
          <ThemedButton customClasses={["ghost"]} type="button" onClick={changeSide}>Test</ThemedButton>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter personal details to start your journey</p>
          <ThemedButton customClasses={["ghost"]} type="button" onClick={changeSide}>Test</ThemedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOverlay;
