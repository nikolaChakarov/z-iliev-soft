import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Navigation from "./components/Navigation";
import Users from "./components/Users";

const App = () => {
	return (
		<Box>
			<Navigation />

			<Routes>
				<Route path="/users" element={<Users />} />
			</Routes>
		</Box>
	);
};

export default App;
