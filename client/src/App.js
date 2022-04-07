import { useEffect, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";

import { Box } from "@mui/material";

import { GlobalContext } from "./context/GlobalState";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Users from "./components/Users";

import Register from "./components/register/Register";

const App = () => {
	const { adminToken } = useContext(GlobalContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!adminToken) {
			navigate({ pathname: "/" });
		}
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: "whitesmoke",
				height: "100vh",
			}}
		>
			<Navigation />

			<Routes>
				<Route path="/register" element={<Register />} />

				<Route path="/" element={<Home />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</Box>
	);
};

export default App;
