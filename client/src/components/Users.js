import { useNavigate } from "react-router-dom";
import { Box, Divider } from "@mui/material";

import CustomButton from "./custom/CustomButton";
import UsersOrdersAddressesTabs from "./UsersOrdersAddressesTabs";

const Users = () => {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
			}}
		>
			<Box>
				<CustomButton
					variant="contained"
					sx={{
						margin: 2,
					}}
					onClick={() => navigate("/create-user")}
				>
					Create User
				</CustomButton>
			</Box>

			<Divider />

			<UsersOrdersAddressesTabs />

			<Box
				sx={{
					margin: 2,
					marginTop: "auto",
				}}
			>
				<CustomButton variant="contained">Export as Exel</CustomButton>
			</Box>
		</Box>
	);
};

export default Users;
