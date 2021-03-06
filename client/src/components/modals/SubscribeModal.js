import { useState, useEffect } from "react";
import { styled } from "@mui/system";

import {
	Box,
	Typography,
	Modal,
	InputLabel,
	Select,
	MenuItem,
	FormControl,
	Divider,
	TextField,
	InputAdornment,
} from "@mui/material";

import FlashOnIcon from "@mui/icons-material/FlashOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import CustomButton from "../custom/CustomButton";
import CustomInputBase from "../custom/CustomInputBase";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	borderRadius: 1,
};

const disableBttn = {
	backgroundColor: (theme) => theme.palette.grey[400],
};

const CustomTitle = styled(Typography)(({ theme }) => ({
	...theme,
	marginBottom: 10,
	fontWeight: 300,
	color: theme.palette.secondary.dark,
	display: "flex",
	justifyContent: "flex-end",
}));

const SubscribeModal = ({ showModal, setShowModal, setState, onSubmit }) => {
	const [selectValues, setSelectValues] = useState({
		subscriptionType: "",
		subscriptionPlan: "",
	});

	const [cardValues, setCardValues] = useState({
		cardHolderName: "",
		cardNumber: "",
		cardExpDate: "",
	});

	const [validateCard, setValidateCard] = useState(false);
	const [cardNumderError, setCardNumberError] = useState(false);

	const [showErrorEl, setShowErrorEl] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSelectChange = (e) => {
		setSelectValues((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleCardChange = (e) => {
		const cardInputName = e.target.name;
		const cardInputValue = e.target.value;

		setCardValues((prev) => ({
			...prev,
			[cardInputName]: cardInputValue,
		}));
	};

	const updateState = () => {
		setState((prev) => ({
			...prev,
			...selectValues,
			...cardValues,
		}));
	};

	const handleCardNumber = (e) => {
		const regex = /^([\d]+\s?)([\d]+\s?)?([\d]+\s?)?([\d]+)?$/g;
		const res = regex.test(e.target.value);

		if (!res) {
			setShowErrorEl(true);
			setErrorMessage("Plese, enter your card number");
		}

		if (cardValues.cardNumber.length > 18) {
			setShowErrorEl(true);
			setErrorMessage("16 digits only");

			setCardValues((prev) => ({
				...prev,
				cardNumber: prev.cardNumber.substring(0, 18),
			}));

			return;
		}

		setCardValues((prev) => ({
			...prev,
			cardNumber: formatCardNumberStr(e.target.value),
		}));
	};

	const handleCardExpDate = (e) => {
		if (cardValues.cardExpDate.length > 8) {
			setShowErrorEl(true);
			setErrorMessage("Please, enter data in format: MM/YY CVC");

			setCardValues((prev) => ({
				...prev,
				cardExpDate: prev.cardExpDate.substring(0, 8),
			}));

			return;
		}

		setCardValues((prev) => ({
			...prev,
			cardExpDate: formatExpCardDate(e.target.value),
		}));
	};

	const formatCardNumberStr = (str) => {
		let formated = str.split(/[\s]*/).reduce((acc, curr, i) => {
			if (i % 4 === 0 && i !== 0) {
				acc.push(" ");
				acc.push(curr);
				return acc;
			}
			acc.push(curr);
			return acc;
		}, []);

		return formated.join("");
	};

	const formatExpCardDate = (str) => {
		let formated = str.split(/[\s\/]*/).reduce((acc, curr, i) => {
			if (i === 2) {
				acc.push("/");
				acc.push(curr);
				return acc;
			}

			if (i === 4) {
				acc.push(" ");
				acc.push(curr);
				return acc;
			}

			acc.push(curr);
			return acc;
		}, []);

		return formated.join("");
	};

	const enableSubscription = () => {
		if (cardValues.cardHolderName === "" || cardValues.cardNumber === "") {
			setValidateCard(false);
			return;
		}

		if (cardValues.cardNumber.length < 19) {
			setValidateCard(false);
			return;
		}

		const expDateRegex = /^[\d]{2}\/[\d]{2}\s[\d]{3}$/;
		if (!expDateRegex.test(cardValues.cardExpDate)) {
			setValidateCard(false);
			return;
		}

		setValidateCard(true);
	};

	useEffect(() => {
		updateState(cardValues);
	}, [selectValues, cardValues]);

	useEffect(() => {
		enableSubscription();
	}, [cardValues, validateCard]);

	return (
		<Box>
			<Modal open={showModal} onClose={() => setShowModal(false)}>
				<Box sx={style}>
					{/* ERROR MESSAGE IF NEEDED */}
					{showErrorEl && (
						<ErrorEl
							errorMessage={errorMessage}
							setShowErrorEl={setShowErrorEl}
						/>
					)}
					{/* end ERROR MESSAGE */}

					<CustomTitle variant="p">Select Type</CustomTitle>
					<FormControl
						fullWidth
						sx={{
							mb: 2,
						}}
					>
						<InputLabel id="demo-simple-select-label">
							Subscription Type
						</InputLabel>
						<Select
							name="subscriptionType"
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={selectValues.subscriptionType}
							label="Subscription Type"
							onChange={handleSelectChange}
						>
							<MenuItem value={"Basic"}>Basic</MenuItem>
							<MenuItem value={"Premium"}>Premium</MenuItem>
							<MenuItem value={"Standard"}>Standard</MenuItem>
						</Select>
					</FormControl>

					<CustomTitle variant="p">Select Plan</CustomTitle>
					<FormControl
						fullWidth
						sx={{
							mb: 2,
						}}
					>
						<InputLabel id="subscriptionPlan">Subscription Plan</InputLabel>
						<Select
							name="subscriptionPlan"
							labelId="subscriptionPlan"
							id="subscriptionPlan"
							value={selectValues.subscriptionPlan}
							label="Subscription Plan"
							onChange={handleSelectChange}
						>
							<MenuItem value={"Mounthly"}>Mounthly</MenuItem>
							<MenuItem value={"Yearly"}>Yearly</MenuItem>
						</Select>
					</FormControl>

					<Divider
						sx={{
							marginBottom: 4,
						}}
					/>

					{/* CARD INFO */}
					<Box
						sx={{ marginBottom: 2, display: "flex", flexDirection: "column" }}
					>
						<Typography
							variant="h5"
							sx={{
								color: (theme) => theme.palette.secondary.dark,
								fontWeight: "bold",
								marginBottom: 1,
								textAlign: "center",
							}}
						>
							Payment Form
						</Typography>
						<CustomInputBase
							placeholder="Card Holder Name"
							name="cardHolderName"
							value={cardValues.cardHolderName}
							onChange={handleCardChange}
							sx={{ marginBottom: 1 }}
						/>
						<TextField
							sx={{
								width: "100%",
								marginBottom: 1,
							}}
							placeholder={`xxxx xxxx xxxx xxxx card number`}
							name="cardNumber"
							value={cardValues.cardNumber}
							onChange={handleCardNumber}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<CreditCardIcon />
									</InputAdornment>
								),
							}}
						/>

						<TextField
							sx={{
								marginLeft: "auto",
							}}
							placeholder={"MM/YY CVC"}
							name="cardExpDate"
							value={cardValues.cardExpDate}
							onChange={handleCardExpDate}
						/>
					</Box>

					{/* buttons set at */}
					<Box sx={{ marginTop: "auto" }}>
						<CustomButton
							type="button"
							sx={validateCard ? null : disableBttn}
							disabled={!validateCard}
							onClick={(e) => {
								onSubmit(e);
								setShowModal(false);
							}}
						>
							Subscribe
						</CustomButton>

						<CustomButton
							onClick={() => setShowModal(false)}
							sx={{
								backgroundColor: "#f44336",
								ml: 1,
								"&:hover": {
									backgroundColor: "#ba000d",
								},
							}}
							type="button"
						>
							Cancel
						</CustomButton>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

const ErrorEl = ({ errorMessage, setShowErrorEl }) => {
	useEffect(() => {
		setTimeout(() => {
			setShowErrorEl(false);
		}, 3000);
	}, []);

	return (
		<Box
			sx={{
				position: "absolute",
				backgroundColor: "red",
				display: "flex",
				alignItems: "center",
				color: "#fff",
				padding: 1,
				borderRadius: 1,
				boxShadow: (theme) => theme.shadows[1],
				top: "50%",
				left: 10,
				zIndex: 100,
			}}
			onClick={() => setShowErrorEl(false)}
		>
			<FlashOnIcon />
			{errorMessage}
		</Box>
	);
};

export default SubscribeModal;
