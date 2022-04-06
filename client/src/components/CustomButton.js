import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: "#fff",
}));

export default CustomButton;
