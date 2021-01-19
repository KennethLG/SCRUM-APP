const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const {PORT} = require("./config");

const app = express(); // create the Express App

// Middlewares
app.use(express.json());
app.use(cors());

routes(app); // Routes

app.listen(PORT, ()=> {
	console.log(`Server started on port ${PORT}`);
})