import "./Clock.css";
import Tickmarks from "./ClockComponents/Tickmarks/Tickmarks";
import BarCardList from "./ClockComponents/BarCard/BarCardList";
import ClockHands from "./ClockComponents/ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";

const Clock = ({ submitted, happyHours, handleZipSubmit, isMobile }) => {
	return (
		<div className="clock-frame">
			<Tickmarks submitted={submitted} />
			{submitted ? <BarCardList happyHours={happyHours} /> : <></>}
			<ClockHands />
		</div>
	);
};

export default Clock;
