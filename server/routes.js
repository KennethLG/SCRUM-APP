const express = require("express");

const Users = require("./database/user");
const Companies = require("./database/company");
const Employees = require("./database//employees");

require("./database/connection");

const router = (app) => {
	app.post("/login", async (req, res, next)=> {
		try {
			const user = req.body;
			const findUser = await Users.findOne({email: user.email});
			console.log(user, findUser);
			if (findUser) {
				if (user.password == findUser.password) {
					res.json({
						user: findUser,
						message: ""
					});
				} else {
					res.json({
						user: undefined,
						message: "Email or/and password wrongs"
					});
				}
			} else {
				res.json({
					user: undefined,
					message: "Email not found, are you signed in?"
				});
			}
		} catch(e) {
			console.error(e);
			next(e);
		}
	});

	app.post("/addCompany", async (req, res, next) => {
		try {
			const company = new Companies(req.body);
			await company.save();
			res.send(company);
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.get("/getCompanies", async (req, res, next) => {
		try {
			const companies = await Companies.find();
			res.send(companies);
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.get("/getCompany/:id", async (req, res, next) => {
		try {
			const company = await Companies.findOne({_id: req.params.id});
			res.send(company);
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.get("/deleteCompany/:id", async (req, res, next) => {
		try {
			const {id} = req.params;
			await Companies.deleteOne({_id: id});
			res.send("user deleted");
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.post("/editCompany/:id", async (req, res, next) => {
		try {
			const {id} = req.params;
			await Companies.updateOne({_id: id}, req.body);
			res.send("edited");
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	// Empleados


	app.post("/addEmployee", async (req, res, next) => {
		try {
			const employee = new Employees(req.body);
			await employee.save();
			res.send(employee);
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.get("/getEmployees", async (req, res, next) => {
		try {
			const employees = await Employees.find({company_id: req.query.id});
			res.send(employees);
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.get("/getEmployee/:id", async (req, res, next) => {
		try {
			const employee = await Employees.findOne({_id: req.params.id});
			res.send(employee);
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.get("/deleteEmployee/:id", async (req, res, next) => {
		try {
			const {id} = req.params;
			await Employees.deleteOne({_id: id});
			res.send("employee deleted");
		} catch (e) {
			console.error(e);
			next(e);
		}
	});

	app.post("/editEmployee/:id", async (req, res, next) => {
		try {
			const {id} = req.params;
			await Employees.updateOne({_id: id}, req.body);
			res.send("edited");
		} catch (e) {
			console.error(e);
			next(e);
		}
	});
}

module.exports = router;