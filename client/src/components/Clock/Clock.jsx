import "./Clock.css";
import Numbers from "./Numbers/Numbers";
import DataDisplay from "./BarCard/DataDisplay";
import ClockHands from "./ClockHands/ClockHands";
import SubmitForm from "../SubmitForm/SubmitForm";
import { useState } from "react";

const Clock = ({ setSubmittedZip }) => {
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="clock-frame">
			<Numbers />
			{submitted ? (
				<>
					<DataDisplay />
					<ClockHands />
				</>
			) : (
				<>
					<ClockHands />
					<SubmitForm
						setSubmittedZip={(zipCode) => {
							setSubmittedZip(zipCode), setSubmitted(!submitted);
						}}
					/>
				</>
			)}
		</div>
	);
};

export default Clock;
