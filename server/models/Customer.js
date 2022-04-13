const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Customer name is required"],
		},
		facebook: String,
		password: {
			type: String,
			required: [true, "Password is required"],
		},
		birtYear: String,
		gender: String,
		billingAddress: String,
		zipCode: String,
		subscritionType: String,
		subscriptionPlan: String,
		cardHolderName: {
			type: String,
			required: [true, "Card Holder Name Is Required"],
		},
		cardNumber: {
			type: String,
			required: [true, "Card Number Is Required"],
		},
		cardExpDate: {
			type: String,
			required: [true, "Card Expitation Date Is Required"],
		},
	},
	{ timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
