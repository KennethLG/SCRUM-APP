import axios from "axios";

export const loginUserAction = (state) => {
	return {
		type: "LOGIN_USER",
		payload: state
	}
}

export const addCompanyAction = (state) => {
	return {
		type: "ADD_COMPANY",
		payload: state
	}
}

export const getCompaniesAction = (state) => {
	return {
		type: "FETCH_COMPANIES",
		payload: state
	}
}

export const getCompanyEditAction = (state) => {
	return {
		type: "FETCH_COMPANY",
		payload: state
	}
}

export const seeCompanyAction = (state) => {
	return {
		type: "SEE_COMPANY",
		payload: state
	}
}

export const changeMessageAction = (state) => {
	return {
		type: "CHANGE_MESSAGE",
		payload: state
	}
}


export const loginUser = (user) => (dispatch) => {
	axios.post("http://localhost:3001/login", user)
	.then(res => dispatch(loginUserAction(res.data)));
}

export const changeMessage = (message) => async (dispatch) => {
	await dispatch(changeMessageAction(message));
}

export const addCompany = (company) => (dispatch) => {
	axios.post("http://localhost:3001/addCompany", company)
	.then(res => {
		dispatch(addCompanyAction(res.data));
	});
}

export const getCompanies = () => (dispatch) => {
	axios.get("http://localhost:3001/getCompanies")
	.then(res => {
		dispatch(getCompaniesAction(res.data));
	})
}

export const getCompanyEdit = (id) => (dispatch) => {
	axios.get(`http://localhost:3001/getCompany/${id}`)
	.then(res => {
		dispatch(getCompanyEditAction(res.data));
	})
}

export const seeCompany = (id) => async (dispatch) => {
	await dispatch(seeCompanyAction(id));
	await dispatch(getEmployees(id));
	await dispatch(getCompanyEdit(id));
}

// Employees

export const addEmployeeAction = (state) => {
	return {
		type: "ADD_EMPLOYEE",
		payload: state
	}
} 

export const getEmployeesAction = (state) => {
	return {
		type: "FETCH_EMPLOYEES",
		payload: state
	}
}

export const getEmployeeEditAction = (state) => {
	return {
		type: "FETCH_EMPLOYEE",
		payload: state
	}
}

export const addEmployee = (employee) => (dispatch) => {
	axios.post("http://localhost:3001/addEmployee", employee)
	.then(res => {
		dispatch(addEmployeeAction(res.data));
	}).then(res => {
		dispatch(getEmployees(employee.company_id));
	});
}

export const getEmployees = (id) => (dispatch) => {
	axios.get(`http://localhost:3001/getEmployees?id=${id}`)
	.then(res => {
		dispatch(getEmployeesAction(res.data));
	})
}

export const getEmployeeEdit = (id) => (dispatch) => {
	axios.get(`http://localhost:3001/getEmployee/${id}`)
	.then(res => {
		dispatch(getEmployeeEditAction(res.data));
	});
}