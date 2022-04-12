import { styled } from "@mui/system";
import { InputBase } from "@mui/material";

const CustomInputBase = styled(InputBase)(({ theme }) => ({
	width: "100%",
	"& .MuiInputBase-input": {
		padding: 5,
		color: "#777",
		border: `1px groove #fff`,
		transition: theme.transitions.create([
			"border-color",
			"background-color",
			"box-shadow",
		]),
	},
}));

export default CustomInputBase;
