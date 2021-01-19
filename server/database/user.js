const {Schema, model} = require("mongoose");

const userSchema = new Schema({
	email: String,
	password : String
}, {
	versionKey: false
})

module.exports = model("users", userSchema);