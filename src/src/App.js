import React, {useState, useEffect} from "react";
import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./actions";

const App = () => {

  const [state, setState] = useState({email: "", psw:""});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onChange = (e) => {
    const target = e.target.name;
    setState({
      ...state,
      [target]:e.target.value
    })
  }
  const submit = (e) => {
    e.preventDefault();
    dispatch(loginUser(state));
  }

  useEffect(()=> {
    console.log(user);
  }, [user]);

  return (
    <div className="App">
      <div className="title-app">SCRUM</div>
      <div className="subtitle">Login to use our services</div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-title">Login</div>
          <form className="login-form" onSubmit={submit}>
            <label className="login-input-title">Email</label><br/>
            <input onChange={onChange} name="email" className="login-input" type="email" placeholder="Email"/><br/>
            <label className="login-input-title">Password</label><br/>
            <input onChange={onChange} name="psw" className="login-input" type="password" placeholder="Password"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
