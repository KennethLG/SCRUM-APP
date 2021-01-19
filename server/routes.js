const express = require("express");
const users = require("./database/user");
require("./database/connection");

const router = (app) => {
	app.post("/login", async (req, res, next)=> {
		try {
			const user = req.body;
			const findUser = await users.findOne({email: user.email});
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
}

module.exports = router;