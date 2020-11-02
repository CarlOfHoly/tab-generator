import React from "react";

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
          <button className="ghost" onClick={changeSide}>Test</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter personal details to start your journey</p>
          <button className="ghost" onClick={changeSide}>Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOverlay;
