/* create customer */
exports.createCustomer = async function (req, res) {
	console.log(req.body);

	res.status(200).json({ status: "success", message: "ok!", data: req.user });
};

/* get all customers from database controller */
exports.getAllCustomers = async function (req, res) {
	res.status(200).json({ status: "success", message: "ok!" });
};
