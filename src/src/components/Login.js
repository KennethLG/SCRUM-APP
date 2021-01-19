import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions";

export const Login = () => {

	const [state, setState] = useState({ email: "", password: "" });
	const dispatch = useDispatch();
	const user = useSelector((state) => state);

	const onChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}
	const submit = (e) => {
		e.preventDefault();
		if (state.email !== "" && state.password !== "") {
			dispatch(loginUser(state));
		} else alert("Please complete the form")
	}

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<div>
			<div className="title-app">SCRUM</div>
			<div className="subtitle">Login to use our services</div>
			<div className="login-container">
				<div className="login-box">
					<div className="login-title">Login</div>
					<form className="login-form" onSubmit={submit}>
						<label className="login-input-title">Email</label><br />
						<input onChange={onChange} name="email" className="login-input" type="email" placeholder="Email" /><br />
						<label className="login-input-title">Password</label><br />
						<input onChange={onChange} name="password" className="login-input" type="password" placeholder="Password" />
						<button className="login-submit" type="submit">Submit</button>
						<div className="login-message">{user.message}</div>
					</form>
				</div>
			</div>
		</div>
	)
}