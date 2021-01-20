import React from "react";
import ReactDOM from "react-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import App from "../App";

it("Home renders correctly", ()=> {
	ReactDOM.render(Home, document.createElement("div"));
});
 
it("Login renders correcly", ()=>{
	ReactDOM.render(Login, document.createElement("div"));
});

it("App renders correcly", ()=> {
	ReactDOM.render(App, document.createElement("div"));
})