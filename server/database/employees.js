const {Schema, model} = require("mongoose");

const employeesSchema = new Schema({
	first_name: String,
	last_name : String,
	company_id: String,
	email: String,
	phone: String
}, {
	versionKey: false
});

module.exports = model("employees", employeesSchema);