import { Link as ReactRouterLink } from "react-router-dom";

import { AppBar, Box, Toolbar, Container, Link } from "@mui/material";
import { styled } from "@mui/system";

import generateURL from "../utils/generateURL";

const MenuLink = styled(Link)(({ theme }) => ({
	display: "inline-flex",
	marginRight: "2rem",
	fontWeight: 300,
	color: "#fff",
	"&:last-of-type": {
		marginRight: 0,
	},
}));

const Navigation = () => {
	const links = [
		"Users",
		"Videos",
		"Videos AAC",
		"Raw",
		"Tags/Sections",
		"Programs",
		"Customers Feedback",
		"Manuals",
		"Blog",
		"Logout",
	];

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar sx={{ backroundColor: "red" }}>
					<MenuLink
						sx={{
							fontWeight: "bold",
							"&:last-of-type": { marginRight: "auto" },
						}}
						component={ReactRouterLink}
						to={`/${generateURL("GoHealty Admin")}`}
					>
						GoHealty Admin
					</MenuLink>

					<Box
						sx={{
							display: "flex",
						}}
					>
						{links.map((l, i) => {
							return (
								<MenuLink
									key={i}
									component={ReactRouterLink}
									to={`/${generateURL(l)}`}
								>
									{l}
								</MenuLink>
							);
						})}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navigation;
