// function that calculates the coordinates for the numbers/cards on the clock
const calculateCoordinates = (containerWidth) => {
	// Get the radius of the container using the width of the container passed
	const radius = containerWidth / 2;

	// Get the dimension of half of the card width, used to subtract from the xval & yval
	const halfCardWidth = containerWidth / 8;

	// Define thetas as an array of 12 angles in radians
	let thetas = Array.from({ length: 12 }).map((_, index) => {
		let degree = (index / 12) * 360;
		return (degree * Math.PI) / 180;
	});

	// Rotate thetas by 3, or 90 degrees, to start at 12 o'clock
	for (let i = 0; i < 3; i++) {
		thetas.unshift(thetas.pop());
	}

	// Map the thetas to x and y values using readius values and subtracting half of the card width
	return thetas.map((theta) => ({
		x: radius + radius * Math.cos(theta) - halfCardWidth,
		y: radius + radius * Math.sin(theta) - halfCardWidth,
	}));
};

export default calculateCoordinates;
