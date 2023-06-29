import "./Clock.css";
import Numbers from './Numbers/Numbers';
import GetTime from "./ClockHands/GetTime";
import SubmitForm from "../SubmitForm/SubmitForm";

const Clock = ({ setSubmittedZip }) => {

	return (
		<div className="clock-frame">
            <Numbers />
            <GetTime />
			<SubmitForm setSubmittedZip={(zipCode) => setSubmittedZip(zipCode)} />
        </div>
    )
	
};

export default Clock;
