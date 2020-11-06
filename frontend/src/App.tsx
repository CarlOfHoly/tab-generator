import React from "react";
import LoginPage from "./components/LogIn/LoginPage";
import Frontpage from "./components/TabPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TunerPage from "./components/TunerPage";
import Construction from "./components/Construction";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/tabs">
            <Frontpage />
          </Route>
          <Route path="/tuner">
            <TunerPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
      
          <Route exact path="/">
            <Construction />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
