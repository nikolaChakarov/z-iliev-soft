import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/system";

import {
	Box,
	InputBase,
	InputLabel,
	Typography,
	Divider,
	RadioGroup,
	Radio,
	FormControlLabel,
	TextareaAutosize,
} from "@mui/material";

import CustomBox from "./custom/CustomBox";
import CustomButton from "./custom/CustomButton";

import useForm from "../utils/useForm";

const CustomTextFiled = styled(InputBase)(({ theme }) => ({
	width: "100%",
	"& .MuiInputBase-input": {
		padding: 5,
		color: "#777",
		border: `1px groove #fff`,
		transition: theme.transitions.create([
			"border-color",
			"background-color",
			"box-shadow",
		]),
	},
}));

const CreateUserForm = () => {
	const navigate = useNavigate();

	const { state, onInputChanged, onSubmit } = useForm(addUser, {
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
	});

	function addUser() {
		console.log(state);
	}

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
					</Box>

					<Box sx={{ marginBottom: 2 }}>
						<CustomInputSet
							labelname="Password"
							elementname="password"
							val={state.password}
							onInputChanged={onInputChanged}
						/>
					</Box>

					<Box sx={{ marginBottom: 2 }}>
						<CustomInputSet
							labelname="Repeat Password"
							elementname="password2"
							val={state.password2}
							onInputChanged={onInputChanged}
						/>
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

			{/* buttons set at the form's bottom */}
			<Box sx={{ marginTop: "auto" }}>
				<CustomButton type="submit">Create Subscription</CustomButton>
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

const CustomInputSet = ({ labelname, elementname, val, onInputChanged }) => {
	return (
		<>
			<InputLabel sx={{ fontWeight: "600", mb: 1 }} htmlFor={elementname}>
				{labelname}
			</InputLabel>
			<CustomTextFiled
				id={elementname}
				name={elementname}
				value={val}
				onChange={onInputChanged}
			/>
		</>
	);
};

export default CreateUserForm;
