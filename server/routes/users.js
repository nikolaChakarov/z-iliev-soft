const router = require("express").Router();
const { check } = require("express-validator");

const {
	registerUser,
	loginUser,
	getAllUsers,
} = require("../controllers/userController");

/* register user */
router.post(
	"/register",
	[
		check("username").notEmpty(),
		check("password").notEmpty(),
		check("password2")
			.notEmpty()
			.custom((val, { req }) => val === req.body.password),
	],
	registerUser
);

/* login user */
router.post("/login", loginUser);

/* get all users */
router.get("/", getAllUsers);

module.exports = router;
