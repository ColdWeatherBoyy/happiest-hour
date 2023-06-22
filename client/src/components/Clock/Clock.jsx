import "./Clock.css";
// import useWindowDimensions from "../../hooks/useWindowDimensions";
import SubmitForm from "../SubmitForm/SubmitForm";

const Clock = ({ setSubmittedZip }) => {
	// let { width } = useWindowDimensions();
	// let diameter = width / 1.5;

	return (
		<div
			className="clock"
			// style={{ width: diameter, height: diameter }}
			style={{ width: "45vw", height: "45vw" }}
		>
			<SubmitForm setSubmittedZip={(zipCode) => setSubmittedZip(zipCode)} />
		</div>
	);
};

export default Clock;

// number.number$*12>div{$}
