import "./BarCardListDisplay.css";
import BarCard from "./BarCard";
import { useEffect, useState, useRef } from "react";
import getWindowDimensions from "../../utils/hooks/useWindowDimensions";

const BarCardList = ({ happyHours }) => {
	const coordinatesRef = useRef(0);
	const { width, height } = getWindowDimensions();

	// function that calculates the coordinates for the numbers/cards on the clock
	const calculateCoordinates = () => {
		const container = coordinatesRef.current;
		const radius = container.offsetWidth / 2;

		// Get the dimention of 10% of the container width, used to subtract from the xval & yval
		const halfCardWidth = container.offsetWidth / 10;

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

	const [coordinates, setCoordinates] = useState(() => calculateCoordinates());
	const [coordinatesAndData, setCoordinatesAndData] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect to reset coordinate state depending on the page size
	useEffect(() => {
		setCoordinates(calculateCoordinates());
		// waits for the width of the window to change using the useWindowDimensions hook in utils folder
	}, [width, height]);

	useEffect(() => {
		if (!happyHours || !coordinates) {
			return;
		}
		// run through each object in both of our arrays to combine them in objects in our temporary Array
		const tempCoordinatesAndData = coordinates.map((coordinate, index) => {
			return {
				key: index,
				name: happyHours[index].name,
				rating: happyHours[index].rating,
				x: coordinate.x,
				y: coordinate.y,
			};
		});

		setCoordinatesAndData(tempCoordinatesAndData);
	}, [happyHours, coordinates]);

	useEffect(() => {
		if (coordinatesAndData.length > 0) {
			setLoading(false);
		}
	}, [coordinatesAndData]);

	return (
		<div ref={coordinatesRef} className="container">
			{loading ? (
				<></>
			) : (
				coordinatesAndData.map(({ key, name, rating, x, y }) => {
					return <BarCard key={key} name={name} rating={rating} xval={x} yval={y} />;
				})
			)}
		</div>
	);
};

export default BarCardList;
