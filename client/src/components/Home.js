import { Box, Typography } from "@mui/material";

import { styled } from "@mui/system";

const Header = styled("h1")(({ theme }) => ({
	...theme,
	boxSizing: "border-box",
	width: "100%",
	fontWeight: "300",
	color: theme.palette.primary.main,
	padding: "40px",
	alignSelf: "center",
	boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.5)",
	textAlign: "center",
}));

const Home = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				flexGrow: 1,
			}}
		>
			<Header>Zonia Admin</Header>
		</Box>
	);
};

export default Home;
