import placeholderData from "../../../assets/PlaceholderData";
import "./Placeholder.css";
import Card from "./Card";
import { useEffect, useState } from "react";

const Placeholder = () => {
  let h, k, r;
  const [coordinates, setCoordinates] = useState();

  const thetas = Array.from({ length: 12 }).map((_, index) => {
    let degree = (index / 12) * 360;
    return (degree * Math.PI) / 180;
    // console.log(theta);
  });

  // console.log("thetas", thetas);

  // const placeCards = () => {

  useEffect(() => {
    const center = document.getElementById("dimensions");
    const dimensions = center.getBoundingClientRect();

    const circleDim = document
      .getElementById("dimensions")
      .getBoundingClientRect();
    r = circleDim.width / 2;
    // console.log(r);

    const { x, y, width, height } = dimensions;
    h = x + 0.5 * width;
    k = y + 0.5 * height;

    // let xval = h + r * Math.cos(theta);
    // let yval = k + r * Math.sin(theta);
    // console.log("yval", yval);

    setCoordinates(
      thetas.map((theta) => {
        return {
          x: h + r * Math.cos(theta),
          y: k + r * Math.sin(theta),
        };
      })
    );

    console.log("x", x);
  }, []);
  //   return {
  //     // xval,
  //     // yval,
  //   };
  // };
  // placeCards();

  return (
    <div id="dimensions" className="container">
      {placeholderData.map((item) => {
        return <Card key={item.key} name={item.name} rating={item.rating} xval='54' yval='76'/>;
      })}
    </div>
  );
};

export default Placeholder;
