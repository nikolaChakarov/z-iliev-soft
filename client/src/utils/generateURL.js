export default (str) => {
	let res = str
		.split(" ")
		.reduce((acc, curr) => {
			let temp = curr.toLowerCase();
			acc.push(temp);
			return acc;
		}, [])
		.join("_");

	return res;
};
