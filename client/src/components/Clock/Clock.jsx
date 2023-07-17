import "./Clock.css";
import Numbers from "./Numbers/Numbers";
import BarCardList from "../BarCard/BarCardList";
import ClockHands from "./ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useState, useEffect } from "react";

const Clock = () => {
	const [submittedZip, setSubmittedZip] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const updateSubmission = (zipCode) => {
		setSubmittedZip(zipCode);
		setSubmitted(!submitted);
	};

	useEffect(() => {
		console.log(submittedZip);
	}, [submittedZip]);

	return (
		<div className="clock-frame">
			<Numbers />
			{submitted ? (
				<>
					<BarCardList zipCode={submittedZip} />
					<ClockHands />
				</>
			) : (
				<>
					<ClockHands />
					<SubmitForm handleZipSubmit={updateSubmission} />
				</>
			)}
		</div>
	);
};

export default Clock;
