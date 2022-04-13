import { useReducer, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import AppReducer from "./AppReducer";

const initState = {
	userToken: localStorage.getItem("userToken")
		? JSON.parse(localStorage.getItem("userToken"))
		: null,
	userEmail: localStorage.getItem("userEmail")
		? JSON.parse(localStorage.getItem("userEmail"))
		: null,
	users: [{ name: "user test" }],
	registerUser: (userinfo) => {},
	loginUser: (userInfo) => {},
	createCustomer: (customerInfo) => {},
};

const SERVER_URL = "http://localhost:5000/api";

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initState);
	const navigate = useNavigate();

	const registerUser = async (user) => {
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

			if (dbRegisterRes.status === "fail") {
				throw new Error(dbRegisterRes);
			}

			navigate("/users");

			dispatch({
				type: "REGISTER",
				payload: dbRegisterRes,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const loginUser = async (user) => {
		try {
			const dbRegisterRes = await (
				await fetch("http://localhost:5000/api/users/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				})
			).json();

			if (dbRegisterRes.status === "fail") {
				throw new Error(dbRegisterRes);
			}

			navigate("/users");

			dispatch({
				type: "LOGIN",
				payload: dbRegisterRes,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const createCustomer = async (customer) => {
		try {
			const dbResponse = await (
				await fetch(`${SERVER_URL}/customers/create`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-auth-token": state.userToken,
					},
					body: JSON.stringify(customer),
				})
			).json();

			if (!dbResponse) {
				throw new Error(dbResponse);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (state.userToken) {
			localStorage.setItem("userToken", JSON.stringify(state.userToken));
			localStorage.setItem("userEmail", JSON.stringify(state.userEmail));
		}
	}, [state.userToken]);

	return (
		<GlobalContext.Provider
			value={{
				userToken: state.userToken,
				users: state.users,
				dispatch,
				registerUser,
				loginUser,
				createCustomer,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
