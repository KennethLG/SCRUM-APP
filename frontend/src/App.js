import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { changeMessage } from "./actions";

import { Login } from "./components/Login";
import { Home } from "./components/Home";

const App = () => {

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

  return (
    <div className="App">
    	<Switch>
	      <Route exact path="/">
	      	{user ? <Redirect to="/home" /> : <Login />}
	      </Route>
	      <Route exact path="/home">
	    		{
	    			user ? <Home /> : () => {
		    			dispatch(changeMessage("You must be logged in!"));
		    			return (<Redirect to="/"/>)
	    			}
	    		}
	      </Route>
      </Switch>
    </div>
  );
}

export default App;
