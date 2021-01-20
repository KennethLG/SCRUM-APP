const initalState = {
	user: undefined,
	message: "",
	company: {
		name: "",
		email: "",
		website: "",
		logo: ""
	},
	companies: [],
	companyEdit: undefined,
	companyId: undefined,
	employee: {
		first_name: "",
		last_name: "",
		email: "",
		phone: ""
	},
	employees: [],
	employeeEdit: undefined
}

export const reducer = (state = initalState, action) => {
	switch (action.type) {
		case "LOGIN_USER":
			return {
				user: action.payload.user,
				message: action.payload.message
			}

		case "ADD_COMPANY":
			return {
				...state,
				company:action.payload.company
			}

		case "FETCH_COMPANIES":
			return {
				...state,
				companies: action.payload
			}

		case "FETCH_COMPANY":
			return {
				...state,
				companyEdit: action.payload
			}

		case "SEE_COMPANY":
			return {
				...state,
				companyId: action.payload
			}

		case "ADD_EMPLOYEE":
			return {
				...state,
				employee: action.payload
			}

		case "FETCH_EMPLOYEES":
			return {
				...state,
				employees: action.payload
			}

		case "FETCH_EMPLOYEE":
			return {
				...state,
				employeeEdit: action.payload
			}

		case "CHANGE_MESSAGE":
			return {
				...state,
				message: action.payload
			}

		default:
			return state;
	}
}