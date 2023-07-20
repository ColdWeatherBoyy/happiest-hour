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
          const tag = (
            <img src={star} style={{ width: "17%", height: "auto" }} />
          );
          const half = (
            <img src={halfStar} style={{ width: "8.5%", height: "auto" }} />
          );
          let stars;

          stars = [...Array(Math.floor(rating))].map((x) => tag);
          if (rating > Math.floor(rating)) stars.push(half);

          return (
            <BarCard key={key} name={name} stars={stars} rating={rating} xval={x} yval={y} />
          );
        })
      )}
    </div>
  );
};

export default BarCardList;
