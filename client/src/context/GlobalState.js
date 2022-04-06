import { useReducer, useEffect, createContext } from "react";
import AppReducer from "./AppReducer";

const initState = {
	users: [{ name: "user test" }],
};

export const GlovbalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	return (
		<GlovbalContext.Provider
			value={{
				users: state.users,
			}}
		>
			{children}
		</GlovbalContext.Provider>
	);
};
