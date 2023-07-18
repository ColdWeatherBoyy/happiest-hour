import React, { useState, useEffect } from "react";
import Clock from "../Clock/Clock";
import Title from "../Title/Title";
import SubmitForm from "../SubmitForm/SubmitForm";

const Home = () => {
	const [submitted, setSubmitted] = useState(false);
	const [happyHours, setHappyHours] = useState([]);

	const handleZipSubmit = (result) => {
		setSubmitted(!submitted);
		setHappyHours(result);
	};

	return (
		<>
			<Title />
			<Clock submitted={submitted} happyHours={happyHours} />
			<SubmitForm
				setHappyHours={setHappyHours}
				handleZipSubmit={handleZipSubmit}
				submitted={submitted}
			/>
		</>
	);
};

export default Home;
