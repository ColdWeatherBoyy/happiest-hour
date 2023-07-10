import "./Clock.css";
import Numbers from "./Numbers/Numbers";
import DataDisplay from "./BarCard/DataDisplay";
import ClockHands from "./ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";

const Clock = ({ setSubmittedZip }) => {
	return (
		<div className="clock-frame">
			<Numbers />
			<DataDisplay />
			<ClockHands />
			<SubmitForm setSubmittedZip={(zipCode) => setSubmittedZip(zipCode)} />
		</div>
	);
};

export default Clock;
