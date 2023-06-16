const getHappyHours = async (zipCode) => {
	try {
		const response = await fetch(`/api/yelp/${zipCode}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		return data.businesses;
	} catch (err) {
		console.error(err.message);
	}
};

export default getHappyHours;
