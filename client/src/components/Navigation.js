import { useContext, useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { AppBar, Box, Toolbar, Container, Link } from "@mui/material";
import { styled } from "@mui/system";

import { GlobalContext } from "../context/GlobalState";
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

	const authLinks = ["Login", "Register"];

	const { userToken } = useContext(GlobalContext);

	useEffect(() => {}, [userToken]);

	return (
		<AppBar position="static">
			<Container maxWidth="xl" sx={{ padding: 0 }}>
				<Toolbar
					sx={{
						"&.MuiToolbar-root": {
							padding: 0,
						},
					}}
				>
					<MenuLink
						sx={{
							fontWeight: "bold",
							"&:last-of-type": { marginRight: "auto" },
						}}
						component={ReactRouterLink}
						to={`/`}
					>
						GoHealty Admin
					</MenuLink>

					<Box
						sx={{
							display: "flex",
						}}
					>
						{userToken
							? links.map((l, i) => <LinkItem linkname={l} key={i} />)
							: authLinks.map((l, i) => <LinkItem linkname={l} key={i} />)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

const LinkItem = ({ linkname }) => {
	return (
		<MenuLink component={ReactRouterLink} to={`/${generateURL(linkname)}`}>
			{linkname}
		</MenuLink>
	);
};

export default Navigation;
