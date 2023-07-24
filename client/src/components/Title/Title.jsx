import "./Title.css";
import logo from '../../assets/logo.png';
import lime from '../../assets/lime-rotated.png';

const Title = () => {
	return (
		<div className="pageTop" >
			<div className="logo">
				<img src={lime} alt="lime slice" id="lime" />
				<p id="title">Happiest Hour</p>
			</div>
			{/* <img src={logo} alt="Happiest Hour logo with lime slice" id="logo" /> */}
			<p id="directions">
				Do you want to know where to drink? <br />
				Enter your zip code below.
			</p>
		</div>
	);
};

export default Title;
