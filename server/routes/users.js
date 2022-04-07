const router = require("express").Router();
const { check } = require("express-validator");

const { registerUser, getAllUsers } = require("../controllers/userController");

/* register user */
router.post(
	"/register",
	[
		check("username").exists(),
		check("password").exists(),
		check("password2")
			.exists()
			.custom((val, { req }) => val === req.body.password),
	],
	registerUser
);

/* get all users */
router.get("/", getAllUsers);

module.exports = router;
