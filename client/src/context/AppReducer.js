const AppReducer = (state, action) => {
	switch (action.type) {
		case "REGISTER":
			return {
				...state,
				userToken: action.payload.usertoken,
				userEmail: action.payload.email,
			};

		case "LOGIN":
			return {
				...state,
				userToken: action.payload.usertoken,
				userEmail: action.payload.email,
			};

		case "LOGOUT":
			return {
				...state,
				userToken: null,
				userEmail: null,
			};

		default:
			return state;
	}
};

export default AppReducer;
