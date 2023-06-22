import React, { useState, useEffect } from "react";
import YelpList from "../YelpList/YelpList";
import Clock from "../Clock/Clock";
import Title from "../Title/Title";

const Home = () => {
	// const [isClicked, setIsClicked] = useState(false);
	const [submitZip, setSubmitZip] = useState("");

	useEffect(() => {
		console.log(submitZip);
	}, [submitZip]);

	return (
		<>
			<Title />
			<Clock setSubmitZip={setSubmitZip} />
			<YelpList zipCode={submitZip} />
		</>
	);
};

export default Home;
