const bycript = require("bcrypt");
const { validationResult } = require("express-validator");

const Customer = require("../models/Customer");

/* create customer */
exports.createCustomer = async function (req, res) {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.status(400).json({ status: "fail", errors: errors.array() });
			return;
		}

		const { password, password2, ...customerData } = req.body;
		const hashedPass = await bycript.hash(password, +process.env.SALT);

		if (!hashedPass) {
			throw new Error("Server Error");
		}

		const currentCustomer = new Customer({
			...customerData,
			password: hashedPass,
		});

		await currentCustomer.save();

		res.status(200).json({
			status: "success",
			message: "customer added",
			id: currentCustomer._id,
		});
	} catch (err) {
		res.status(500).json({ status: "fail", message: err.message });
	}
};

/* get all customers from database controller */
exports.getAllCustomers = async function (req, res) {
	res.status(200).json({ status: "success", message: "ok!" });
};
