const express = require("express");
require("dotenv").config();
const expressConfig = require("./config/expressConfig");

const app = express();
expressConfig(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is listening at port: ${PORT}`);
});
