const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: {
			required: true,
			type: String,
		},
		email: {
			required: true,
			unique: true,
			type: String,
		},
		password: {
			required: true,
			type: String,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
