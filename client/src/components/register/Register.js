import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { styled } from "@mui/system";
import { TextField, Box, Link, Typography } from "@mui/material";

import { GlobalContext } from "../../context/GlobalState";
import useForm from "../../utils/useForm";

import CustomButton from "../custom/CustomButton";
import CustomBox from "../custom/CustomBox";

const CustomTextFiled = styled(TextField)(({ theme }) => ({
	...theme,
	marginBottom: 20,
}));

const Register = () => {
	const { registerUser } = useContext(GlobalContext);

	function sendInfo() {
		registerUser(state);
	}

	const { state, onInputChanged, onSubmit } = useForm(sendInfo, {
		username: "",
		email: "",
		password: "",
		password2: "",
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<CustomBox
				component="form"
				onSubmit={onSubmit}
				sx={{
					width: "50%",
					"& .MuiTextField-root": { width: "100%" },
					backgroundColor: "#fff",
					padding: 2,
					borderRadius: "3px",
				}}
				noValidate
				autoComplete="off"
			>
				<CustomTextFiled
					id="username"
					label="user name"
					variant="outlined"
					name="username"
					value={state.username}
					onChange={onInputChanged}
				/>
				<CustomTextFiled
					id="email"
					label="email"
					variant="outlined"
					name="email"
					value={state.email}
					onChange={onInputChanged}
				/>
				<CustomTextFiled
					id="password"
					label="password"
					variant="outlined"
					name="password"
					value={state.password}
					onChange={onInputChanged}
				/>
				<CustomTextFiled
					sx={{
						marginBottom: 0,
					}}
					id="password2"
					label="repeat password"
					variant="outlined"
					name="password2"
					value={state.password2}
					onChange={onInputChanged}
				/>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						mt: 2,
					}}
				>
					<CustomButton type="submit">Register</CustomButton>
					<Typography variant="p">
						Already have an account? Please,{" "}
						<Link
							component={ReactRouterLink}
							to="/login"
							sx={{
								fontWeight: "bold",
							}}
						>
							login
						</Link>
					</Typography>
				</Box>
			</CustomBox>
		</Box>
	);
};

export default Register;
