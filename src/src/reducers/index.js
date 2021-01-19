const initalState = {
	user : undefined
}

export const reducer = (state = initalState, action)=> {
	switch(action.type) {
		case "LOGIN_USER":
			return {
				user: action.payload
			}

		default :
			return state;
	}
}