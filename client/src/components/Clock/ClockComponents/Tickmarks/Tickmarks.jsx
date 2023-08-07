import "./Tickmarks.css";

const Tickmarks = ({ submitted }) => {
	// create an array of 12 numbers to map over
	let num = Array.from({ length: 12 }).map((_, index) => {
		index = index + 1;
		return index;
	});

	// if submitted is true, hide the tickmarks
	const displayVal = submitted ? "hidden" : "visible";

	return (
		<div className="outer-clock-face" style={{ visibility: displayVal }}>
			{/* map over created array to create tick marks */}
			{num.map((index) => {
				return (
					<div
						key={index}
						style={{
							position: "absolute",
							// Logic below to determine which tick marks are longer or have different color
							zIndex: `${index % 3 === 0 ? 1 : 0}`,
							left: `${index % 3 === 0 ? "calc(50% - 2.5px)" : "calc(50% - 1.5px)"}`,
							bottom: "50%",
							transformOrigin: "bottom center",
							backgroundColor: `${index % 3 === 0 ? "#000000" : "#808080"}`,
							width: `${index % 3 === 0 ? 5 : 3}px`,
							// height: `${index % 3 === 0 ? 12 : 10}%`,
							height: `95%`,
							// calculate the rotation of each tick mark
							transform: `rotate(${(index / 12) * 360}deg)`,
						}}
					></div>
				);
			})}
			<div className="inner-clock-face-big"></div>
			<div className="inner-clock-face-small"></div>
		</div>
	);
};

export default Tickmarks;
