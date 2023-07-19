import "./BarCardListDisplay.css";
import BarCard from "./BarCard";
import { useEffect, useState, useRef } from "react";
import getWindowDimensions from "../../../../utils/hooks/useWindowDimensions";
import calculateCoordinates from "../../../../utils/calculateCoordinates";
import star from '../../../../assets/star.png';
import halfStar from '../../../../assets/half-star.png';


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
					const tag = <img src={star} style={{width: '20%', height: 'auto'}}/>
					const half = <img src={halfStar} style={{width: '10%', height: 'auto'}}/>
					let numStars, stars;
					// console.log(rating)

					if (rating === 5) {
						stars = <span>{tag}{tag}{tag}{tag}{tag}</span>
					} else if (rating === 4) {
						stars = <span>{tag}{tag}{tag}{tag}</span>
					} else if (rating === 3) {
						stars = <span>{tag}{tag}{tag}</span>
					} else if (rating === 2) {
						stars = <span>{tag}{tag}</span>
					} else if (rating === 1) {
						stars = <span>{tag}</span>
					} else if (4 < rating < 5) {
						stars = <span>{tag}{tag}{tag}{tag}{half}</span>
					}

					// while (rating) {
					// 	if (Number.isInteger(rating)) {
					// 		for (let i = 0; i < rating; i++) {
					// 			tag += tag
					// 		}
					// 		break;
					// 	} else if (rating === 0) {
					// 		stars = '';
					// 	} else {
					// 		numStars = Math.floor(rating);
					// 		for (let i = 0; i < numStars; i++) {
					// 			stars += tag
					// 		}
					// 		stars += half
					// 		break;
					// 	}
					// }

					// let shortName = name.slice(0, 20)
					// console.log(shortName)
					

					return <BarCard key={key} name={name} rating={stars} xval={x} yval={y} />;
					// return <BarCard key={key} name={name} rating={rating} xval={x} yval={y} />;
				})
			)}
		</div>
	);
};

export default BarCardList;
