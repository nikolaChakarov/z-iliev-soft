import { styled } from "@mui/system";
import { Box } from "@mui/material";

const CustomBox = styled(Box)(({ theme }) => ({
	...theme,
	boxShadow: theme.shadows[2],
}));

export default CustomBox;
