import "./Clock.css";
import Tickmarks from "./ClockComponents/Tickmarks/Tickmarks";
import BarCardList from "./ClockComponents/BarCard/BarCardList";
import ClockHands from "./ClockComponents/ClockHands/ClockHands";

const Clock = ({ submitted, happyHours, handleZipSubmit, isMobile }) => {
	return (
		<div className="clock-frame">
			<Tickmarks submitted={submitted} />
			{submitted ? <BarCardList happyHours={happyHours} /> : <></>}
			<ClockHands submitted={submitted} />
		</div>
	);
};

export default Clock;
