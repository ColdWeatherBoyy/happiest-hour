import "./Clock.css";
import SubmitForm from "../SubmitForm/SubmitForm";
import Numbers from './Numbers/Numbers';

const Clock = ({ setSubmitZip }) => {

	return (
		<div className="clock">
            <Numbers />
			<SubmitForm onClick={(zipCode) => setSubmitZip(zipCode)} />
		</div>
	);
};

export default Clock;
