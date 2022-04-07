import { useState } from "react";

const useForm = (callback, initState) => {
	const [state, setState] = useState(initState);

	const onInputChanged = (e) => {
		const inputname = e.target.name;
		const inputvalue = e.target.value;

		setState((prev) => ({
			...prev,
			[inputname]: inputvalue,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		callback();
	};

	return { state, setState, onInputChanged, onSubmit };
};

export default useForm;
