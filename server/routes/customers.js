const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");

const { check } = require("express-validator");

const {
	createCustomer,
	getAllCustomers,
} = require("../controllers/customerController");

/* create customer */
router.post(
	"/create",
	isAuth,
	[
		check("name").notEmpty(),
		check("password").notEmpty(),
		check("password2").custom((val, { req }) => {
			if (val != req.body.password) {
				throw new Error("Password confirmation is incorrect");
			}
			return true;
		}),
	],
	createCustomer
);

/* get all customers */
router.get("/", isAuth, getAllCustomers);

module.exports = router;
