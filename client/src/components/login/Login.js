import { useContext } from "react";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";

import { styled } from "@mui/system";
import { TextField, Box, Link, Typography } from "@mui/material";

import { GlobalContext } from "../../context/GlobalState";
import useForm from "../../utils/useForm";

import CustomButton from "../custom/CustomButton";

const CustomBox = styled(Box)(({ theme }) => ({
	...theme,
	boxShadow: theme.shadows[2],
}));

const CustomTextFiled = styled(TextField)(({ theme }) => ({
	...theme,
	marginBottom: 20,
}));

const Login = () => {
	const { loginUser } = useContext(GlobalContext);

	function sendInfo() {
		loginUser(state);
	}

	const { state, onInputChanged, onSubmit } = useForm(sendInfo, {
		email: "",
		password: "",
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

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						mt: 2,
					}}
				>
					<CustomButton type="submit">Login</CustomButton>
					<Typography variant="p">
						Don't have an account? Please,{" "}
						<Link
							component={ReactRouterLink}
							to="/register"
							sx={{
								fontWeight: "bold",
							}}
						>
							register
						</Link>
					</Typography>
				</Box>
			</CustomBox>
		</Box>
	);
};

export default Login;
