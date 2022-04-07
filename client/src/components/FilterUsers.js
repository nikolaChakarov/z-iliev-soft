import { Box, Paper, Typography } from "@mui/material";
import UsersTable from "./UsersTable";

import CustomButton from "./custom/CustomButton";

const FilterUsers = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				margin: 2,
			}}
		>
			<Typography
				sx={{
					fontWeight: 300,
					color: "#006f92",
					marginBottom: 2,
				}}
			>
				Filter Users
			</Typography>

			<UsersTable />
		</Box>
	);
};

export default FilterUsers;
