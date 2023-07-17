import placeholderData from "../../assets/PlaceholderData";
import "./BarCardListDisplay.css";
import BarCard from "./BarCard";
import { useEffect, useState, useRef } from "react";
import getHappyHours from "../../utils/yelpRequest";
import getWindowDimensions from "../../utils/hooks/useWindowDimensions";

const BarCardList = ({ zipCode }) => {
	const [happyHours, setHappyHours] = useState([]);
	const [count, setCount] = useState(0);

	const coordinatesRef = useRef(0);
	const [coordinates, setCoordinates] = useState();
	const [coordinatesAndData, setCoordinatesAndData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { width, height } = getWindowDimensions();

	// Define thetas as an array of 12 angles in radians
	let thetas = Array.from({ length: 12 }).map((_, index) => {
		let degree = (index / 12) * 360;
		return (degree * Math.PI) / 180;
	});

	for (let i = 0; i < 3; i++) {
		thetas.unshift(thetas.pop());
	}

	// this useEffect sets the coordinates of the 12 points on the circle in our state, accounting for resizing
	useEffect(() => {
		const updateCoordinates = () => {
			// Get the dimensions of the radius by halfing the container size using the container useRef
			const container = coordinatesRef.current;
			const radius = container.offsetWidth / 2;

			// Get the dimention of 10% of the container width, used to subtract from the xval & yval
			const halfCardWidth = container.offsetWidth / 10;

			// Calculate the coordinates of the 12 points on the circle
			const newCoordinates = thetas.map((theta) => {
				return {
					x: radius + radius * Math.cos(theta) - halfCardWidth,
					y: radius + radius * Math.sin(theta) - halfCardWidth,
				};
			});

			// Update the coordinates state
			setCoordinates(newCoordinates);
		};

		updateCoordinates();

		// waits for the width of the window to change using the useWindowDimensions hook in utils folder
	}, [width, height]);

	// this useEffect combines our coordinate data for circle placement with our bar data from the yelp API (currently hardcoded test data)
	useEffect(() => {
		// Call to API

		const fetchData = async () => {
			try {
				const result = await getHappyHours(zipCode);
				if (!result && count < 2) {
					alert("Was that really a valid Zip Code? Try again...");
					setCount(count + 1);
				} else if (!result && count >= 2) {
					alert("Maybe there just aren't any happy hours nearby ¯\\_(ツ)_/¯");
				} else {
					setHappyHours(result);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [zipCode]);

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
	}, [happyHours]);

	useEffect(() => {
		if (coordinatesAndData) {
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
