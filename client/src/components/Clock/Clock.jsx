import "./Clock.css";
import Numbers from "./Numbers/Numbers";
import Placeholder from "./BarCard/Placeholder";
import ClockHands from "./ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";

const Clock = ({ setSubmittedZip }) => {
	return (
		<div className="clock-frame">
			<Numbers />
			<Placeholder />
			<ClockHands />
			<SubmitForm setSubmittedZip={(zipCode) => setSubmittedZip(zipCode)} />
		</div>
	);
};

export default Clock;
