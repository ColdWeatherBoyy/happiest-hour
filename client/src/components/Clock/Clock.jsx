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
			{isMobile ? (
				<></>
			) : (
				<SubmitForm handleZipSubmit={handleZipSubmit} submitted={submitted} />
			)}
			{/* <div id="clock-face-background"></div> */}
		</div>
	);
};

export default Clock;
