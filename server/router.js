const router = require("express").Router();

router.use("/api/users", require("./routes/users"));
router.use("/api/customers", require("./routes/customers"));

module.exports = router;
