const mongoose = require("mongoose");
const {DB_USERNAME, DB_PASSWORD, DB_NAME} = require("./config");

(async ()=> {
	const db = await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.tgrpo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	console.log(`database connected to ${db.connection.name}`);
})()