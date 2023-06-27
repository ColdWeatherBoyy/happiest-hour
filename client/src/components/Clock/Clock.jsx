import "./Clock.css";
import SubmitForm from "../SubmitForm/SubmitForm";
import Numbers from './Numbers/Numbers';

const Clock = ({ setSubmittedZip }) => {

	return (
		<div className="clock-frame">
            <Numbers />
			<SubmitForm setSubmittedZip={(zipCode) => setSubmittedZip(zipCode)} />
        </div>
    )
	
};

export default Clock;
