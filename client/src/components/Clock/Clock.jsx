import "./Clock.css";
import Numbers from "./Numbers/Numbers";
import ClockHands from "./ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";

const Clock = ({ setSubmittedZip }) => {
	return (
		<div className="clock-frame">
			{/* <div className="vertical-line"></div>
			<div className="horizontal-line"></div> */}
			{/* <Numbers /> */}
			<ClockHands />
			<SubmitForm setSubmittedZip={(zipCode) => setSubmittedZip(zipCode)} />
		</div>
	);
};

export default Clock;
