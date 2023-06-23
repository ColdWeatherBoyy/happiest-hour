import "./Clock.css";
import './Numbers/Numbers.css';
import SubmitForm from "../SubmitForm/SubmitForm";
import Numbers from './Numbers/Numbers';

const Clock = ({ setSubmittedZip }) => {

	return (
		<div className="clock">
            {/* <Numbers className='numbers'/> */}
            <Numbers className='numbers'/>
			<SubmitForm setSubmittedZip={(zipCode) => setSubmittedZip(zipCode)} />
        </div>
    )
	
};

export default Clock;
