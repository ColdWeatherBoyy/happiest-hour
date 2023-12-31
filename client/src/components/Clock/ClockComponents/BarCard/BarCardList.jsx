import "./BarCardListDisplay.css";
import BarCard from "./BarCard";
import { useEffect, useState, useRef } from "react";
import getWindowDimensions from "../../../../utils/hooks/useWindowDimensions";
import calculateCoordinates from "../../../../utils/calculateCoordinates";
import ZeroStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_0.png";
import OneStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_1.png";
import OneHalfStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_1_half.png";
import TwoStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_2.png";
import TwoHalfStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_2_half.png";
import ThreeStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_3.png";
import ThreeHalfStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_3_half.png";
import FourStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_4.png";
import FourHalfStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_4_half.png";
import FiveStarReview from "../../../../assets/yelp_stars/web_and_ios/regular/regular_5.png";

const BarCardList = ({ happyHours }) => {
	// useRef to get the width of the container div
	const coordinatesRef = useRef(0);
	// getWindowDimensions hook to get the width of the window, defined in utils hooks folder
	const { width, height } = getWindowDimensions();

	// useState to hold the coordinates of each bar card
	const [coordinates, setCoordinates] = useState([]);
	// useState to hold the data and coordinates of each bar card
	const [coordinatesAndData, setCoordinatesAndData] = useState([]);
	// useState to hold the loading state of the page
	const [loading, setLoading] = useState(true);

	// useEffect to reset coordinate state depending on the page size
	useEffect(() => {
		// utilizes useRef to get the width of the container div, if it exists
		if (coordinatesRef.current) {
			// calculate the coordinates of each bar card, using utility function in utils folder and set them in coordinates state
			setCoordinates(calculateCoordinates(coordinatesRef.current.offsetWidth));
		}
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
				review_count: happyHours[index].review_count,
				link: happyHours[index].url,
				x: coordinate.x,
				y: coordinate.y,
			};
		});

		// set the state of coordinatesAndData from temporary array, using coordinates state and data from happyHours prop
		setCoordinatesAndData(tempCoordinatesAndData);
	}, [happyHours, coordinates]);

	useEffect(() => {
		// if coordinatesAndData has data, set loading to false
		if (coordinatesAndData.length > 0) {
			setLoading(false);
		}
	}, [coordinatesAndData]);

	function generateStars(rating) {
		// Object with all the star images by rating number
		const reviewStarsObj = {
			0: ZeroStarReview,
			1: OneStarReview,
			1.5: OneHalfStarReview,
			2: TwoStarReview,
			2.5: TwoHalfStarReview,
			3: ThreeStarReview,
			3.5: ThreeHalfStarReview,
			4: FourStarReview,
			4.5: FourHalfStarReview,
			5: FiveStarReview,
		};
		return <img className="stars" alt="review in stars" src={reviewStarsObj[rating]} />;
	}

	function adjustFontSize(name) {
		// acts as media query for font size prop
		let fontSize;
		const nameArr = name.split(" ");

		if (width <= 540) {
			fontSize = 50;
			if (nameArr.length > 3) {
				fontSize = 40;
			}
		} else if (width > 540 && width < 940) {
			fontSize = 65;
			if (nameArr.length > 3) {
				fontSize = 48;
			}
		} else if (width <= 950) {
			fontSize = 85;
			if (nameArr.length > 3) {
				fontSize = 55;
			}
		} else if (nameArr.length > 3) {
			fontSize = 60;
		} else {
			fontSize = 80;
		}
		return fontSize;
	}

	return (
		<div ref={coordinatesRef} className="container">
			{loading ? (
				<></>
			) : (
				// once loading is set to false, map through coordinatesAndData state and return a BarCard component for each object.
				coordinatesAndData.map(({ key, name, rating, review_count, link, x, y }) => {
					return (
						<BarCard
							key={key}
							name={name}
							// Use generateStars function to return the correct star image for each bar card
							rating={generateStars(rating)}
							review_count={review_count}
							link={link}
							xval={x}
							yval={y}
							// use adjustFontSize function to return the correct font size for each bar card
							fontSize={adjustFontSize(name)}
						/>
					);
				})
			)}
		</div>
	);
};

export default BarCardList;
