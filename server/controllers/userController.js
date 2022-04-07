const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

/* mongoose User model */
const User = require("../models/User");

/* register user controller */
async function registerUser(req, res) {
	const { username, email, password, password2 } = req.body;

	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new Error(errors.array()[0].msg);
		}

		const cryptedPass = await bcrypt.hash(password, Number(process.env.SALT));

		const currentUser = new User({ username, email, password: cryptedPass });
		await currentUser.save();

		console.log(currentUser);

		res.json(cryptedPass);
	} catch (err) {
		console.error(err);
		res.status(400).json(err.message);
	}
}

/* get all users from database controller */
function getAllUsers(req, res) {
	res.status(200).json({ status: "success", message: "ok!" });
}

module.exports = {
	registerUser,
	getAllUsers,
};
