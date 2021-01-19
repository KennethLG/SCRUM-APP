import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';

import { Login } from "./components/Login";
import { Home } from "./components/Home";

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
