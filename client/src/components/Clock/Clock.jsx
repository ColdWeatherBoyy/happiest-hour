import "./Clock.css";
import Tickmarks from "./ClockComponents/Tickmarks/Tickmarks";
import BarCardList from "./ClockComponents/BarCard/BarCardList";
import ClockHands from "./ClockComponents/ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useState } from "react";

const Clock = () => {
	const [submittedZip, setSubmittedZip] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [happyHours, setHappyHours] = useState([]);

	const updateSubmission = (zipCode, result) => {
		setSubmittedZip(zipCode);
		setSubmitted(!submitted);
		setHappyHours(result);
	};

	return (
		<div className="clock-frame">
			<Tickmarks submitted={submitted} />
			{submitted ? (
				<>
					<BarCardList happyHours={happyHours} />
					<ClockHands />
				</>
			) : (
				<>
					<SubmitForm setHappyHours={setHappyHours} handleZipSubmit={updateSubmission} />
					<ClockHands />
				</>
			)}
		</div>
	);
};

export default Clock;
