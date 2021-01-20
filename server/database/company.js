const {Schema, model} = require("mongoose");

const companiesSchema = new Schema({
	name: String,
	email : String,
	website: String,
	logo: String
}, {
	versionKey: false
});

module.exports = model("companies", companiesSchema);