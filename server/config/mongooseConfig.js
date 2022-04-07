const mongoose = require("mongoose");

const mongooseConfig = () => {
	return mongoose
		.connect(process.env.DB_URL)
		.then(() => {
			console.log("DB connected.");
		})
		.catch((err) => console.error(err));
};

module.exports = mongooseConfig;
