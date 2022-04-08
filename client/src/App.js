import { useEffect, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";

import { Box } from "@mui/material";

import { GlobalContext } from "./context/GlobalState";

import Navigation from "./components/Navigation";

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";

import Home from "./components/Home";
import Users from "./components/Users";
import CreateUserForm from "./components/CreateUserForm";

const App = () => {
	const { userToken } = useContext(GlobalContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!userToken) {
			navigate({ pathname: "/" });
		}
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
			}}
		>
			<Navigation />

			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />

				<Route path="/" element={<Home />} />
				<Route path="/users" element={<Users />} />

				<Route path="/create-user" element={<CreateUserForm />} />
			</Routes>
		</Box>
	);
};

export default App;
