import "./Title.css";
import lime from '../../assets/lime.png';

const Title = () => {
	return (
		<div className="pageTop" >
			<div className="logo">
				<img src={lime} alt="lime slice" id="lime" />
				<h1 id="title" >Happiest Hour</h1>
			</div>
			<p id="directions">
				Do you want to know where to drink? <br />
				Enter your zip code below.
			</p>
		</div>
	);
};

export default Title;
