import placeholderData from "../../../assets/PlaceholderData";
import "./Placeholder.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import { set } from "mongoose";

const Placeholder = () => {
	let h, k, r;
	const [coordinates, setCoordinates] = useState();
	const [coordinatesAndData, setCoordinatesAndData] = useState();
	const [loading, setLoading] = useState(true);

	// this useEffect sets the coordinates of the 12 points on the circle in our state to be available once we get bar data
	useEffect(() => {
		// define thetas as an array of 12 angles in radians
		let thetas = Array.from({ length: 12 }).map((_, index) => {
			let degree = (index / 12) * 360;
			return (degree * Math.PI) / 180;
		});

		for (let i = 0; i < 3; i++) {
			thetas.unshift(thetas.pop());
		}

		// get the dimensions of the center div
		const center = document.getElementById("dimensions");
		const dimensions = center.getBoundingClientRect();

		// get the radius of the circle
		const circleDim = document.getElementById("dimensions").getBoundingClientRect();
		r = circleDim.width / 2;

		// get the center of the circle
		const { x, y, width, height } = dimensions;
		h = x + 0.5 * width;
		k = y + 0.5 * height;

		// set the coordinates of the 12 points on the circle in our state
		setCoordinates(
			thetas.map((theta) => {
				return {
					x: h + r * Math.cos(theta),
					y: k + r * Math.sin(theta),
				};
			})
		);
	}, []);

	// this useEffect combines our coordinate data for circle placement with our bar data from the yelp API (currently hardcoded test data)
	// Remember to change the trigger to the useEffect to be on the successful return of the API call
	useEffect(() => {
		if (!coordinates) return;

		// Establishes an empty array to combine our coordinate and bar data
		const tempCoordinatesAndData = [];
		// run through each object in both of our arrays to combine them in objects in our temporary Array
		for (let i = 0; i < coordinates.length; i++) {
			tempCoordinatesAndData.push({
				key: i,
				name: placeholderData[i].name,
				rating: placeholderData[i].rating,
				x: coordinates[i].x,
				y: coordinates[i].y,
			});
		}

		setCoordinatesAndData(tempCoordinatesAndData);
	}, [coordinates]);

	useEffect(() => {
		if (!coordinatesAndData) return;
		setLoading(false);
	}, [coordinatesAndData]);

	return (
		<div id="dimensions" className="container">
			{loading ? (
				<></>
			) : (
				coordinatesAndData.map(({ key, name, rating, x, y }) => {
					return <Card key={key} name={name} rating={rating} xval={x} yval={y} />;
				})
			)}
		</div>
	);
};

export default Placeholder;
