const express = require("express");
require("./connection");

function router(app) {
	app.get("/login", (req, res)=> {
		try {
			res.send("xd");
		} catch(e) {
			console.log(e);
		}
	});
}

module.exports = router;