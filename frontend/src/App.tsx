import React from "react";
import LoginPage from "./components/LogIn/LoginPage";
import Frontpage from "./components/TabPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TunerPage from "./components/TunerPage";
import Construction from "./components/Construction";
import {useAuth} from "./auth";
import Header from "./components/Header";

const App = () => {
  const [authenticated] = useAuth();
  console.log(authenticated);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header authenticated={authenticated}/>
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
