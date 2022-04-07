import { createTheme } from "@mui/material/styles";

const mainColor = "#009ec3";
const mainLight = "#5ccff6";
const mainDark = "#006f92";

const secondaryColor = "#673ab7 ";
const secondaryLight = "#9a67ea";
const secondaryDark = "#320b86";

const zoniaTheme = createTheme({
	palette: {
		primary: {
			main: mainColor,
			light: mainLight,
			dark: mainDark,
		},
		secondary: {
			main: secondaryColor,
			light: secondaryLight,
			dark: secondaryDark,
		},
	},
	customBttn: {
		backgroundColor: secondaryColor,
		color: "#fff",
		fontWeight: "bold",

		"&:hover": {
			backgroundColor: secondaryDark,
		},
	},
});

export default zoniaTheme;
