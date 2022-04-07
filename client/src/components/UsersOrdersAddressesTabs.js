import * as React from "react";

import { styled } from "@mui/system";
import { Tabs, Tab, Box, Paper } from "@mui/material";

import FilterUsers from "./FilterUsers";

const AdminTab = styled(Tab)(({ theme }) => ({
	...theme,
	"&.Mui-selected": {
		color: "#320b86",
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			// hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			style={{
				display: value !== index ? "none" : "flex",
				flexDirection: "column",
				flexGrow: 1,
			}}
		>
			{value === index && (
				<Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

export default function UsersOrdersAddressesTabs() {
	const [selectedTab, setSelectedTab] = React.useState(0);

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
			}}
		>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
				}}
			>
				<Tabs
					value={selectedTab}
					onChange={handleChange}
					aria-label="basic tabs example"
					indicatorColor="secondary"
					sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					<AdminTab label="Users" />
					<AdminTab label="Orders" />
					<AdminTab label="Adresses" />
				</Tabs>
			</Box>

			<TabPanel value={selectedTab} index={0}>
				<FilterUsers />
			</TabPanel>

			<TabPanel value={selectedTab} index={1}>
				Orders
			</TabPanel>

			<TabPanel value={selectedTab} index={2}>
				Adresses
			</TabPanel>
		</Box>
	);
}
