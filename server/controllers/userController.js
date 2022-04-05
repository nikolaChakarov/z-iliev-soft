function getAllUsers(req, res) {
	res.status(200).json({ status: "success", message: "ok!" });
}

module.exports = {
	getAllUsers,
};
