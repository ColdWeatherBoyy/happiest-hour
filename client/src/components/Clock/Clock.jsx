import "./Clock.css";
import Tickmarks from "./ClockComponents/Tickmarks/Tickmarks";
import BarCardList from "./ClockComponents/BarCard/BarCardList";
import ClockHands from "./ClockComponents/ClockHands/ClockHands";

const Clock = ({ submitted, happyHours }) => {
	return (
		<div className="clock-frame">
			{/* Tickmarks component, with submitted prop */}
			<Tickmarks submitted={submitted} />
			{/* BarCardList component, with happyHours prop. Only displays if submitted is truthy */}
			{submitted ? <BarCardList happyHours={happyHours} /> : <></>}
			{/* ClockHands component, with submitted prop */}
			<ClockHands submitted={submitted} />
		</div>
	);
};

export default Clock;
