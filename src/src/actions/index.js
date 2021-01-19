import axios from "axios";

export const loginRequest = (state) => {
	return {
		type: "LOGIN_USER",
		payload: state
	}
}

export const loginUser = (user) => (dispatch) => {
	axios.post("http://localhost:3001/login", user)
	.then(res => dispatch(loginRequest(res.data)));
}