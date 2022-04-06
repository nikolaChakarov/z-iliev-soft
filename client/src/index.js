import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import zoniaTheme from "./theme/zoniaTheme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<ThemeProvider theme={zoniaTheme}>
			<App />
		</ThemeProvider>
	</BrowserRouter>
);
