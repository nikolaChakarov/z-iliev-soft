import { useReducer, useEffect, createContext } from "react";
import AppReducer from "./AppReducer";

const initState = {
	adminToken: localStorage.getItem("adminToken")
		? JSON.parse(localStorage.getItem("adminToken"))
		: null,
	users: [{ name: "user test" }],
	registerUser: (userinfo) => {},
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	const registerUser = async (user) => {
		console.log(user, "xxx");
		try {
			const dbRegisterRes = await (
				await fetch("http://localhost:5000/api/users/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				})
			).json();

			if (!dbRegisterRes) {
				throw new Error(dbRegisterRes.message);
			}

			console.log(dbRegisterRes);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		localStorage.setItem("admin", JSON.stringify(initState.admin));
	}, [initState.admin]);

	return (
		<GlobalContext.Provider
			value={{
				adminToken: state.adminToken,
				users: state.users,
				registerUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
