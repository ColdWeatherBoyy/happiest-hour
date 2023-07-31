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
	const coordinatesRef = useRef(0);
	const { width, height } = getWindowDimensions();

	const [coordinates, setCoordinates] = useState([]);
	const [coordinatesAndData, setCoordinatesAndData] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect to reset coordinate state depending on the page size
	useEffect(() => {
		if (coordinatesRef.current) {
			setCoordinates(calculateCoordinates(coordinatesRef.current.offsetWidth));
		}
		// waits for the width of the window to change using the useWindowDimensions hook in utils folder
	}, [width, height]);

	useEffect(() => {
		if (!happyHours || !coordinates) {
			return;
		}
		console.log(happyHours);
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

		setCoordinatesAndData(tempCoordinatesAndData);
	}, [happyHours, coordinates]);

	useEffect(() => {
		if (coordinatesAndData.length > 0) {
			setLoading(false);
		}
	}, [coordinatesAndData]);

	function generateStars(rating) {
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
		return <img alt="review in stars" src={reviewStarsObj[rating]} />;
	}

	function adjustFontSize() {
		let fontSize;
		if (width <= 540) {
			fontSize = 50;
		} else if (width <= 950) {
			fontSize = 85;
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
				coordinatesAndData.map(({ key, name, rating, review_count, link, x, y }) => {
					return (
						<BarCard
							key={key}
							// name={name}
							name={name}
							rating={generateStars(rating)}
							review_count={review_count}
							link={link}
							xval={x}
							yval={y}
							fontSize={adjustFontSize()}
						/>
					);
				})
			)}
		</div>
	);
};

export default BarCardList;
