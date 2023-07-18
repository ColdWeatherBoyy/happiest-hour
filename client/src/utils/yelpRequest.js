const getHappyHours = async (zipCode) => {
	try {
		const response = await fetch(`/api/yelp/${zipCode}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		if (!data || !data.businesses || data.businesses.length === 0) {
			throw new Error("No happy hours found for the given Zip Code.");
		}

		return data.businesses;
	} catch (err) {
		throw err;
	}
};

export default getHappyHours;
