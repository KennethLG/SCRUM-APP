const express = require("express");
const routes = require("./routes");
const {PORT} = require("./config");

const app = express();

routes(app);

app.listen(PORT, ()=> {
	console.log(`Server started on port ${PORT}`);
})