import "./ClockHands.css";
import { useState, useEffect } from "react";
import yelp from "../../../../assets/yelp_logo.png";

function ClockHands({ submitted }) {
	// set the state of now to the current time
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		// set an interval to update the time every second
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		// clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, []);

	// calculate the degree of each hand based on the current time
	let hourDegree = ((now.getHours() % 12) / 12) * 360 + (now.getMinutes() / 60) * 30;
	let minuteDegree = (now.getMinutes() / 60) * 360;
	let secondDegree = (now.getSeconds() / 60) * 360;

	return (
		<div>
			{!submitted && (
				<div>
					<div id="outer-center-point"></div>
					<div id="inner-center-point"></div>
					{/* transforms rotate each hand by the degree needed to represent each time */}
					<div id="hour-hand" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
					<div id="minute-hand" style={{ transform: `rotate(${minuteDegree}deg)` }}></div>
					<div id="second-hand" style={{ transform: `rotate(${secondDegree}deg)` }}></div>
					<div
						id="second-hand-bottom"
						style={{ transform: `rotate(${secondDegree}deg)` }}
					></div>
					<div className="inner-clock-face"></div>
				</div>
			)}
			{/* When submitted is true, displays yelp logo */}
			{submitted && (
				<div id="yelp-container">
					<p id="yelp-text" style={{ marginBottom: "0" }}>
						Made
						<br />
						possible
						<br />
						by
					</p>
					<a
						href="https://www.yelp.com"
						target="_blank"
						rel="noopener noreferrer"
						id="yelp-link-container"
					>
						<img id="yelp-logo" alt="yelp logo" src={yelp} />
					</a>
				</div>
			)}
		</div>
	);
}

export default ClockHands;
