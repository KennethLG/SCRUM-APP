const express = require("express");
require("./connection");

function router(app) {
	app.post("/login", (req, res)=> {
		try {
			res.send(req.body);
		} catch(e) {
			console.log(e);
		}
	});
}

module.exports = router;