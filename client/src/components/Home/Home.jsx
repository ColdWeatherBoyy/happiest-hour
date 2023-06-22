import React, { useState, useEffect } from "react";
import YelpList from "../YelpList/YelpList";
import Clock from "../Clock/Clock";
import Title from "../Title/Title";

const Home = () => {
	// const [isClicked, setIsClicked] = useState(false);
	const [submittedZip, setSubmittedZip] = useState("");

	useEffect(() => {
		console.log(submittedZip);
	}, [submittedZip]);

	return (
		<>
			<Title />
			<Clock setSubmittedZip={setSubmittedZip} />
			<YelpList submittedZip={submittedZip} />
		</>
	);
};

export default Home;
