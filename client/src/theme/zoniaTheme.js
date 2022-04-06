import { createTheme } from "@mui/material/styles";

const mainColor = "#009ec3";
const secondaryColor = "#673ab7 ";

const zoniaTheme = createTheme({
	palette: {
		primary: {
			main: mainColor,
		},
		secondary: {
			main: secondaryColor,
		},
	},
});

export default zoniaTheme;
