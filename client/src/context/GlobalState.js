import { useReducer, useEffect, createContext } from "react";
import AppReducer from "./AppReducer";

const initState = {
	adminToken: localStorage.getItem("adminToken")
		? JSON.parse(localStorage.getItem("adminToken"))
		: null,
	users: [{ name: "user test" }],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	useEffect(() => {
		localStorage.setItem("admin", JSON.stringify(initState.admin));
	}, [initState.admin]);

	return (
		<GlobalContext.Provider
			value={{
				adminToken: state.adminToken,
				users: state.users,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
