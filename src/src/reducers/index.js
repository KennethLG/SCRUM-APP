const initalState = {
	user : undefined,
	message: ""
}

export const reducer = (state = initalState, action)=> {
	switch(action.type) {
		case "LOGIN_USER":
			return {
				user: action.payload.user,
				message: action.payload.message
			}

		default :
			return state;
	}
}