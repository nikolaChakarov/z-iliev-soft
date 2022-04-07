import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const Logout = () => {
	const { dispatch, userToken } = useContext(GlobalContext);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch({
			type: "LOGOUT",
		});
		localStorage.removeItem("userEmail");
		localStorage.removeItem("userToken");

		navigate("/");
	}, []);

	return null;
};

export default Logout;
