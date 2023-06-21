import React, { useState, useEffect } from "react";
import SubmitForm from "../SubmitForm/SubmitForm";
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
			<Clock />
			<SubmitForm onClick={(zipCode) => setSubmitZip(zipCode)} />
			<YelpList zipCode={submitZip} />
		</>
	);
};

export default Home;
