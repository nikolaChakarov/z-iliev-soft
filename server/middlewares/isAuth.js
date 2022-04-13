const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
	const token = req.headers["x-auth-token"];

	try {
		if (!token) {
			throw new Error("Not authorized!!!");
		}
		jwt.verify(token, process.env.SECRET, (err, decoded) => {
			if (err) {
				throw new Error("Not authorized!");
			}

			req.user = decoded;

			next();
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({ status: "fail", message: err.message });
	}
};

module.exports = isAuth;
