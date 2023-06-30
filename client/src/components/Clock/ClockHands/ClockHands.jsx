import "./ClockHands.css";
import { useState, useEffect } from "react";

function ClockHands() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	let hourDegree = ((now.getHours() % 12) / 12) * 360 + (now.getMinutes() / 60) * 30;
	let minuteDegree = (now.getMinutes() / 60) * 360;
	let secondDegree = (now.getSeconds() / 60) * 360;

	return (
		<div>
			<div id="outer-center-point"></div>
			<div id="inner-center-point"></div>
			<div id="hour-hand" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
			<div id="minute-hand" style={{ transform: `rotate(${minuteDegree}deg)` }}></div>
			<div id="second-hand" style={{ transform: `rotate(${secondDegree}deg)` }}></div>
		</div>
	);
}

export default ClockHands;
