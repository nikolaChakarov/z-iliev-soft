require("dotenv").config();
const express = require("express");
const expressConfig = require("./config/expressConfig");
const mongooseConfig = require("./config/mongooseConfig");

const PORT = process.env.PORT || 5001;

const app = express();
expressConfig(app);

mongooseConfig()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is listening at port: ${PORT}`);
		});
	})
	.catch((err) => console.error(err));
