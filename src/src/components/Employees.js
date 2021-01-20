import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, getEmployees, getEmployeeEdit, getCompanyEdit } from "../actions";
import axios from "axios";

export const Employees = () => {

	const [employee, setEmployee] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		editId: ""
	});

	const dispatch = useDispatch();
	const companyId = useSelector((state) => state.companyId);
	const employees = useSelector((state) => state.employees);
	const employeeEdit = useSelector((state) => state.employeeEdit);
	const companyEdit = useSelector((state) => state.companyEdit);

	const submit = async (e) => {
		e.preventDefault();
		if (companyId) {
			if (employee.editId === "") {
				dispatch(addEmployee({
					first_name: employee.first_name, 
					last_name: employee.last_name, 
					email: employee.email, 
					phone: employee.phone, 
					company_id: companyId
				}));
			} else {
				await axios.post(`http://localhost:3001/editEmployee/${employee.editId}`, {
					first_name: employee.first_name,
					last_name: employee.last_name,
					email: employee.email,
					phone: employee.phone,
					company_id: companyId
				});
			}
			setEmployee({
				first_name: "",
				last_name: "",
				email: "",
				phone: "",
				editId: ""
			});
		} else {
			alert("You must select a company");
		}
	}

	const onChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value
		})
	}

	const editItem = (e) => {
		dispatch(getEmployeeEdit(e.target.name));
		setEmployee({
			...employee,
			editId: ""
		})
	}

	const deleteItem = async (e)=> {
		await axios.get(`http://localhost:3001/deleteEmployee/${e.target.name}`);
	}

	useEffect(() => {
		if (employeeEdit && employee.editId === "") {
			setEmployee({
				...employee,
				first_name: employeeEdit.first_name,
				last_name: employeeEdit.last_name,
				email: employeeEdit.email,
				phone: employeeEdit.phone,
				editId: employeeEdit._id
			});
		}
	}, [employeeEdit]);

	return (
		<div className="employees">
			<div className="employees-box">
				<div className="home-title">{companyEdit && companyEdit.name} Employees</div>

						<table>
							<thead>
								<tr>
									<th>First name</th>
									<th>Last name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Actions</th>
								</tr>
							</thead>

							<tbody>
								{employees && employees.map(item =>
									<tr key={item._id}>
										<td>{item.first_name}</td>
										<td>{item.last_name}</td>
										<td>{item.email}</td>
										<td>{item.phone}</td>
										<td>
											<button className="edit" name={item._id} onClick={editItem}>EDIT</button>
											<button className="delete" name={item._id} onClick={deleteItem}>DELETE</button>
										</td>
									</tr>
								)}
							</tbody>
						</table>

				<form className="employees-form" onSubmit={submit}>
					<label className="home-input-title">First name</label><br />
					<div className="home-input"><input className="home-input-text" onChange={onChange} type="text" name="first_name" placeholder="First name" value={employee.first_name}/></div>
					<label className="home-input-title">Last name</label><br />
					<div className="home-input"><input className="home-input-text" onChange={onChange} type="text" name="last_name" placeholder="Last name" value={employee.last_name}/> </div>
					<label className="home-input-title">Email</label><br />
					<div className="home-input"><input className="home-input-text" onChange={onChange} type="text" name="email" placeholder="Email" value={employee.email}/> </div>
					<label className="home-input-title">Phone</label><br />
					<div className="home-input"><input className="home-input-text" onChange={onChange} type="text" name="phone" placeholder="Phone" value={employee.phone}/> </div>
					<button className="submit" type="submit">Add employee</button>
				</form>
			</div>
		</div>
	)
}