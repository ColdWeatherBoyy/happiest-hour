import "./Clock.css";
import Tickmarks from "./ClockComponents/Tickmarks/Tickmarks";
import BarCardList from "./ClockComponents/BarCard/BarCardList";
import ClockHands from "./ClockComponents/ClockHands/ClockHands";
import { useState } from "react";

const Clock = ({ submitted, happyHours }) => {
	return (
		<div className="clock-frame">
			<Tickmarks submitted={submitted} />
			{submitted ? <BarCardList happyHours={happyHours} /> : <></>}
			<ClockHands />
		</div>
	);
};

export default Clock;
