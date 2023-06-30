import "./Numbers.css";
import { useState, useEffect } from "react";

const Numbers = () => {
	// const [rotation, setRotation] = useState(0);
	// const [color, setColor] = useState("000000");
	// const [height, setHeight] = useState(0);
	// const [width, setWidth] = useState(0);
	let num = Array.from({ length: 12 }).map((_, index) => {
		index = index + 1;
		return index;
	});

	// const placeMarkings = () => {
	// 	let color;
	// 	let height;
	// 	let width;

	// 	if (num % 3 === 0) {
	// 		color = "000000";
	// 		height = 12;
	// 		width = 5;
	// 	} else {
	// 		color = "808080";
	// 		height = 10;
	// 		width = 3;
	// 	}

	// 	setColor(color);
	// 	setHeight(height);
	// 	setWidth(width);
	// };

	return (
		<div className="outer-clock-face">
			{num.map((index) => {
				return (
					<div
						key={index}
						style={{
							position: "absolute",
							left: `${index % 3 === 0 ? "calc(50% - 2.5px)" : "calc(50% - 1.5px)"}`,
							bottom: "50%",
							transformOrigin: "bottom center",
							backgroundColor: `${index % 3 === 0 ? "#000000" : "#808080"}`,
							width: `${index % 3 === 0 ? 5 : 3}px`,
							height: `${index % 3 === 0 ? 12 : 10}%`,
							transform: `rotate(${(index / 12) * 360}deg)`,
						}}
					></div>
				);
			})}
			<div className="inner-clock-face"></div>
		</div>
	);
};

export default Numbers;
