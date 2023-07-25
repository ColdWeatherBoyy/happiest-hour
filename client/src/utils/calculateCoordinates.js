// function that calculates the coordinates for the numbers/cards on the clock
const calculateCoordinates = (containerWidth) => {
	const radius = containerWidth / 2;

	// Get the dimention of half of the container width, used to subtract from the xval & yval
	// const halfCardWidth = 3 * (containerWidth / 20);
	const halfCardWidth = (containerWidth / 8);

	// Define thetas as an array of 12 angles in radians
	let thetas = Array.from({ length: 12 }).map((_, index) => {
		let degree = (index / 12) * 360;
		return (degree * Math.PI) / 180;
	});

	for (let i = 0; i < 3; i++) {
		thetas.unshift(thetas.pop());
	}

	return thetas.map((theta) => ({
		x: radius + radius * Math.cos(theta) - halfCardWidth,
		y: radius + radius * Math.sin(theta) - halfCardWidth,
	}));
};

export default calculateCoordinates;
