import "./Title.css";
import logo from '../../assets/logo.png';
import SubmitForm from "../SubmitForm/SubmitForm";
import lime from '../../assets/lime-rotated.png';

const Title = ({ handleZipSubmit, isMobile, submitted }) => {
	return (
		<div className="pageTop" >
			<div className="logo">
				<img src={lime} alt="lime slice" id="lime" />
				<p id="title">Happiest Hour</p>
			</div>
			<p id="directions">
				Do you want to know where to drink? <br />
				Enter your zip code below.
			</p>
			{isMobile ? (
				<></>
			) : (
				<SubmitForm handleZipSubmit={handleZipSubmit} submitted={submitted} />
			)}
		</div>
	);
};

export default Title;
