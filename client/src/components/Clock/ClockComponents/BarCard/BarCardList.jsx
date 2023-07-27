import "./BarCardListDisplay.css";
import BarCard from "./BarCard";
import { useEffect, useState, useRef } from "react";
import getWindowDimensions from "../../../../utils/hooks/useWindowDimensions";
import calculateCoordinates from "../../../../utils/calculateCoordinates";
import star from "../../../../assets/new-star.png";
import halfStar from "../../../../assets/half-star.png";

const BarCardList = ({ happyHours }) => {
	const coordinatesRef = useRef(0);
	const { width, height } = getWindowDimensions();

	const [coordinates, setCoordinates] = useState([]);
	const [coordinatesAndData, setCoordinatesAndData] = useState([]);
	const [loading, setLoading] = useState(true);


  console.log(happyHours)
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

  function generateStars(rating) {
    const fullStarImg = (
      <img
        src={star}
        alt="full star"
        style={{ width: "15%", height: "auto" }}
      />
    );
    const halfStarImg = (
      <img
        src={halfStar}
        alt="half star"
        style={{ width: "7.5%", height: "auto" }}
      />
    );

    const stars = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<span key={`full_${i}`}>{fullStarImg}</span>);
    }

    if (rating > Math.floor(rating)) {
      stars.push(<span key={`half_${Math.floor(rating)}`}>{halfStarImg}</span>);
    }

    return <span>{stars}</span>;
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
    return fontSize
  }

  return (
    <div ref={coordinatesRef} className="container" >
      {loading ? (
        <></>
      ) : (
        coordinatesAndData.map(({ key, name, rating, x, y }) => {
          return (
            <BarCard
              key={key}
              // name={name}
              name={name}
              rating={generateStars(rating)}
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
