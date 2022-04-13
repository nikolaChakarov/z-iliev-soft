const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

/* mongoose User model */
const User = require("../models/User");

/* register user controller */
exports.registerUser = async function (req, res) {
	const { username, email, password } = req.body;

	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new Error(errors.array()[0].msg);
		}

		const cryptedPass = await bcrypt.hash(password, Number(process.env.SALT));

		const currentUser = new User({ username, email, password: cryptedPass });
		await currentUser.save();

		const usertoken = jwt.sign(
			{
				id: currentUser._id,
				username: currentUser.username,
				email: currentUser.email,
			},
			process.env.SECRET,
			{ expiresIn: "1d" }
		);

		res.status(200).json({ username, email, usertoken });
	} catch (err) {
		console.error(err);
		res.status(400).json({ status: "fail", message: err });
	}
};

/* login user controller */
exports.loginUser = async function (req, res) {
	try {
		const { email, password } = req.body;

		const currentUser = await User.findOne({ email });

		if (!currentUser) {
			res.status(400).json({ status: "fail", message: "Invalid credentials" });
			return;
		}

		const decrypedPass = await bcrypt.compare(password, currentUser.password);

		if (!decrypedPass) {
			res.status(400).json({ status: "fail", message: "Invalid credentials" });
			return;
		}

		const usertoken = jwt.sign(
			{
				id: currentUser._id,
				username: currentUser.username,
				email: currentUser.email,
			},
			process.env.SECRET,
			{ expiresIn: "1d" }
		);

		res.status(200).json({ username: currentUser.username, email, usertoken });
	} catch (err) {
		req.status(400).json({ status: "fail", message: err });
	}
};
