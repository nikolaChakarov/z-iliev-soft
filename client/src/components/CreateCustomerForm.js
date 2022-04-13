import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import SubscribeModal from "./modals/SubscribeModal";

import {
	Box,
	InputLabel,
	Typography,
	Divider,
	RadioGroup,
	Radio,
	FormControlLabel,
	TextareaAutosize,
	Alert,
	IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import CustomBox from "./custom/CustomBox";
import CustomButton from "./custom/CustomButton";
import CustomInputBase from "./custom/CustomInputBase";

import useForm from "../utils/useForm";

const CreateCustomerForm = () => {
	const navigate = useNavigate();

	const { createCustomer } = useContext(GlobalContext);

	const [showModal, setShowModal] = useState(false);
	const initState = {
		name: "",
		facebook: "",
		email: "",
		password: "",
		password2: "",
		birthYear: "",
		gender: "",
		billingAddress: "",
		zipCode: "",
		subscriptionType: "",
		subscriptionPlan: "",
		cardHolderName: "",
		cardNumber: "",
		cardExpDate: "",
	};

	const { state, setState, onInputChanged, onSubmit } = useForm(
		addUser,
		initState
	);

	const [showAlert, setShowAlert] = useState({});
	const [showSuccess, setShowSuccess] = useState(false);
	const handleAlert = (e) => {
		const currentAlert = e.currentTarget.dataset.name;

		setShowAlert((prev) => ({
			...prev,
			[currentAlert]: false,
		}));
	};

	const handleSubscription = () => {
		const requiredFields = ["name", "email", "billingAddress", "password"];
		let pass = true;

		requiredFields.forEach((el) => {
			if (state[el] === "") {
				pass = false;
				setShowAlert((prev) => ({
					...prev,
					[el]: true,
				}));
			}
		});

		if (state.password !== state.password2) {
			pass = false;
			setShowAlert((prev) => ({
				...prev,
				password2: true,
			}));
		}

		if (pass) {
			setShowModal(true);
		}
	};

	function addUser() {
		createCustomer(state);

		setState({ ...initState });

		setShowSuccess(true);
	}

	useEffect(() => {
		setShowAlert({});
	}, [state]);

	useEffect(() => {
		setTimeout(() => {
			setShowSuccess(false);
		}, 5000);
	}, [showSuccess]);

	return (
		<CustomBox
			component="form"
			id="add-user-form"
			onSubmit={onSubmit}
			sx={{
				marginX: 5,
				marginY: 2,
				padding: 3,
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
			}}
		>
			{/* modal */}
			{showModal && (
				<SubscribeModal
					showModal={showModal}
					setShowModal={setShowModal}
					setState={setState}
					onSubmit={onSubmit}
				/>
			)}
			{/* end modal */}

			<Typography
				variant="h5"
				sx={{
					fontWeight: "bold",
					marginBottom: 1,
					textAlign: "center",
					color: "#320b86",
				}}
			>
				Personal Info
			</Typography>

			<Divider sx={{ marginBottom: 2 }} />

			{/* top inner wrapper box */}
			<Box sx={{ display: "flex" }}>
				{/* left top form side */}
				<CustomBox
					className="form-left-part"
					sx={{ flex: 1, margin: 2, padding: 2, borderRadius: 1 }}
				>
					<Box sx={{ marginBottom: 2 }}>
						<CustomInputSet
							labelname="Name"
							elementname="name"
							val={state.name}
							onInputChanged={onInputChanged}
						/>

						<Alert
							severity="error"
							action={
								<IconButton
									color="inherit"
									size="small"
									onClick={handleAlert}
									data-name="name"
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{ mb: 2, display: showAlert["name"] ? "flex" : "none" }}
						>
							Please, type a name
						</Alert>
					</Box>

					<Box sx={{ marginBottom: 2 }}>
						<CustomInputSet
							labelname="Facebook Name"
							elementname="facebook"
							val={state.facebook}
							onInputChanged={onInputChanged}
						/>
					</Box>

					<Box sx={{ marginBottom: 2 }}>
						<CustomInputSet
							labelname="Email"
							elementname="email"
							val={state.email}
							onInputChanged={onInputChanged}
						/>

						<Alert
							severity="error"
							action={
								<IconButton
									color="inherit"
									size="small"
									onClick={handleAlert}
									data-name="email"
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{ mb: 2, display: showAlert["email"] ? "flex" : "none" }}
						>
							Please, type an email
						</Alert>
					</Box>

					<Box sx={{ marginBottom: 2 }}>
						<CustomInputSet
							labelname="Password"
							elementname="password"
							val={state.password}
							onInputChanged={onInputChanged}
						/>
						<Alert
							severity="error"
							action={
								<IconButton
									color="inherit"
									size="small"
									onClick={handleAlert}
									data-name="password"
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{ mb: 2, display: showAlert["password"] ? "flex" : "none" }}
						>
							Please, enter your password
						</Alert>
					</Box>

					<Box sx={{ marginBottom: 2 }}>
						<CustomInputSet
							labelname="Repeat Password"
							elementname="password2"
							val={state.password2}
							onInputChanged={onInputChanged}
						/>
						<Alert
							severity="error"
							action={
								<IconButton
									color="inherit"
									size="small"
									onClick={handleAlert}
									data-name="password2"
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{ mb: 2, display: showAlert["password2"] ? "flex" : "none" }}
						>
							The passwords are not the same
						</Alert>
					</Box>
				</CustomBox>

				{/* right top form side */}
				<CustomBox
					className="form-right-part"
					sx={{ flex: 1, margin: 2, padding: 2, borderRadius: 1 }}
				>
					<Box>
						<CustomInputSet
							labelname="Birth Year"
							elementname="birthYear"
							val={state.birthYear}
							onInputChanged={onInputChanged}
						/>
					</Box>

					{/* radio buttons group */}
					<CustomBox
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							margin: 2,
							borderRadius: 1,
						}}
					>
						<InputLabel sx={{ fontWeight: "600" }} htmlFor="gender">
							Gender
						</InputLabel>
						<RadioGroup
							value={state.gender}
							name="gender"
							onChange={onInputChanged}
							row
						>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
							/>
							<FormControlLabel value="male" control={<Radio />} label="Male" />
						</RadioGroup>
					</CustomBox>

					{/* text area */}
					<Box sx={{ marginBottom: 1, width: "80%" }}>
						<InputLabel
							sx={{ fontWeight: "600", marginBottom: 1 }}
							htmlFor="billingAddress"
						>
							Billing Address
						</InputLabel>
						<TextareaAutosize
							minRows={3}
							maxRows={3}
							name="billingAddress"
							value={state.billingAddress}
							onChange={onInputChanged}
							style={{
								width: "100%",
								resize: "none",
								border: "2px groove",
								padding: "5px",
								color: "#777",
								boxSizing: "border-box",
								outline: "none",
							}}
						/>

						<Alert
							severity="error"
							action={
								<IconButton
									color="inherit"
									size="small"
									onClick={handleAlert}
									data-name="billingAddress"
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{
								mb: 2,
								display: showAlert["billingAddress"] ? "flex" : "none",
							}}
						>
							Please, type your Billing Address
						</Alert>
					</Box>

					{/* zip code */}
					<Box
						sx={{
							width: "60%",
						}}
					>
						<CustomInputSet
							labelname="Zip Code"
							elementname="zipCode"
							val={state.zipCode}
							onInputChanged={onInputChanged}
						/>
					</Box>
				</CustomBox>
			</Box>

			<Divider sx={{ marginY: 2 }} />

			<Alert
				action={
					<IconButton
						color="inherit"
						size="small"
						onClick={() => setShowSuccess(false)}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
				sx={{
					mb: 2,
					boxShadow: (theme) => theme.shadows[1],
					display: showSuccess ? "flex" : "none",
				}}
			>
				Customer has been successfully added!
			</Alert>

			{/* buttons set at the form's bottom */}
			<Box sx={{ marginTop: "auto" }}>
				<CustomButton type="button" onClick={handleSubscription}>
					Create Subscription
				</CustomButton>

				<CustomButton
					onClick={() => navigate("/users")}
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
		</CustomBox>
	);
};

/* create custom input set */
const CustomInputSet = ({ labelname, elementname, val, onInputChanged }) => {
	return (
		<>
			<InputLabel sx={{ fontWeight: "600", mb: 1 }} htmlFor={elementname}>
				{labelname}
			</InputLabel>
			<CustomInputBase
				id={elementname}
				name={elementname}
				value={val}
				onChange={onInputChanged}
			/>
		</>
	);
};

export default CreateCustomerForm;
