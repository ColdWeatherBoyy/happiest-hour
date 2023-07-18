import React, { useState, useEffect } from "react";
import YelpList from "../YelpList/YelpList";
import Clock from "../Clock/Clock";
import Title from "../Title/Title";

const Home = () => {
	// const [isClicked, setIsClicked] = useState(false);
	// const [submittedZip, setSubmittedZip] = useState("");

	return (
		<>
			<Title />
			<Clock />
		</>
	);
};

export default Home;
