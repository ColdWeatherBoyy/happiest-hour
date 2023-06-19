import React, { useState, useEffect } from "react";
import SubmitForm from "../SubmitForm/SubmitForm";
import YelpList from "../YelpList/YelpList";

const Home = () => {
	// const [isClicked, setIsClicked] = useState(false);
	const [submitZip, setSubmitZip] = useState("");

	useEffect(() => {
		console.log(submitZip);
	}, [submitZip]);

	return (
		<>
			<h1>Happiest Hour</h1>
			<SubmitForm onClick={(zipCode) => setSubmitZip(zipCode)} />
			<YelpList zipCode={submitZip} />
		</>
	);
};

export default Home;
