import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addCompany, getCompanies, getCompanyEdit, seeCompany} from "../actions";

export const Companies = () => {

	const [company, setCompany] = useState({
		name: "",
		email: "",
		website: "",
		logo: "",
		message: "",
		editId: ""
	});

	const dispatch = useDispatch();
	const companies = useSelector((state) => state.companies);
	const companyEdit = useSelector((state) => state.companyEdit);

	const onChange = (e) => {
		setCompany({
			...company,
			[e.target.name]: e.target.value
		});
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		if (company.name !== "") {
			let validate = true;
			if (company.logo !== "") {
				let logo = new Image();
				logo.src = company.logo;
				logo.onload = () => {
					if (!/.(gif|jpeg|jpg|png)$/i.test(company.logo)) {
						setCompany({
							...company,
							message: "The image must be only a GIF, JPG or PNG"
						});
						validate = false;
					}
					if (logo.width < 100 && logo.height < 100) {
						setCompany({
							...company,
							message: "The height and width of the image must be grater than 100px"
						});
						validate = false;
					}	
				}
			}

			if (validate) {
				if (company.editId === "") {
					dispatch(addCompany({name: company.name, email: company.email, website: company.website, logo: company.logo}));
				} else {
					await axios.post(`http://localhost:3001/editCompany/${company.editId}`, {
						name: company.name, 
						email: company.email, 
						website: company.website, 
						logo: company.logo
					});
				}
				setCompany({
					name: "",
					email: "",
					website: "",
					logo: "",
					message: "",
					editId: ""
				});
			}
		} else {
			alert("You must write the company name");
		}
	}

	const deleteItem = async (e) => {
		await axios.get(`http://localhost:3001/deleteCompany/${e.target.name}`);
	}

	const editItem = (e) => {
		dispatch(getCompanyEdit(e.target.name));
		setCompany({
			...company,
			editId: ""
		})
	}

	const seeItem = (e) => {
		dispatch(seeCompany(e.target.name));
		rowSelect(e);
		console.log();
	}

	const rowSelect = (e) => {
		let elements = document.getElementsByClassName("clicked");
		for (let i = 0; i < elements.length; i++) {
			document.getElementsByClassName("clicked")[i].className = "unclicked";
		}
		if (e.target.parentElement.parentElement.className === "clicked") e.target.parentElement.parentElement.className = "unclicked";
		else e.target.parentElement.parentElement.className = "clicked";
	}

	useEffect(()=> {
		dispatch(getCompanies());
	}, [companies]);

	useEffect(() => {
		if (companyEdit && company.editId === "") {
			setCompany({
				...company,
				name: companyEdit.name,
				email: companyEdit.email,
				website: companyEdit.website,
				logo: companyEdit.logo,
				editId: companyEdit._id
			});
		}
	}, [companyEdit]);

	return (
		<div>
			<div className="companies">
				<div className="companies-form">
					<div className="companies-box">
						<div className="home-title">Companies</div>

						<table>
							<thead>
								<tr>
									<th>Logo</th>
									<th>Name</th>
									<th>Email</th>
									<th>Website</th>
									<th>Actions</th>
								</tr>
							</thead>

							<tbody>
								{companies && companies.map(item =>
									<tr key={item._id}className="unclicked">
										<td><img src={item.logo} style={{width: "16px", height: "16px", display: "block", margin: "auto"}}/></td>
										<td>{item.name}</td>
										<td>{item.email}</td>
										<td><a href={item.website} className="link">{item.website}</a></td>
										<td>
											<button className="edit" name={item._id} onClick={editItem}>EDIT</button>
											<button className="delete" name={item._id} onClick={deleteItem}>DELETE</button>
											<button className="see" name={item._id} onClick={seeItem}>SELECT</button>
										</td>
									</tr>
								)}
							</tbody>
						</table>


						<form className="company-form" onSubmit={onSubmit}>
							<label className="home-input-title">Name</label><br />
							<div className="home-input"><input className="home-input-text" onChange={onChange} type="text" name="name" placeholder="Company name" value={company.name}/> </div>
							<label className="home-input-title">Email</label><br />
							<div className="home-input"><input className="home-input-text" onChange={onChange} type="text" name="email" placeholder="Company email" value={company.email}/> </div>
							<label className="home-input-title">Website</label><br />
							<div className="home-input"><input className="home-input-text" onChange={onChange} type="text" name="website" placeholder="Company website" value={company.website}/></div>
							<label className="home-input-title">Logo link</label><br />
							<div className="home-input"><input className="home-input-text" onChange={onChange}  type="text" name="logo" placeholder="Logo link" value={company.logo}/></div>
							<button className="submit" type="submit">Add company</button>
							<div className="message">{company.message}</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}