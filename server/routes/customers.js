const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");

const {
	createCustomer,
	getAllCustomers,
} = require("../controllers/customerController");

/* create customer */
router.post("/create", isAuth, createCustomer);

/* get all customers */
router.get("/", isAuth, getAllCustomers);

module.exports = router;
