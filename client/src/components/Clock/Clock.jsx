import "./Clock.css";
import Numbers from "./Numbers/Numbers";
import BarCardList from "../BarCard/BarCardList";
import ClockHands from "./ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useState, useEffect } from "react";

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
			<Numbers />
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
