const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	PORT: process.env.PORT || 3001,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME
}