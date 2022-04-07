import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
	...theme.customBttn,
}));

export default CustomButton;
