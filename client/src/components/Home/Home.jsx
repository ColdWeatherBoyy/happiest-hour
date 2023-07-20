import React, { useState, useEffect } from "react";
import Clock from "../Clock/Clock";
import Title from "../Title/Title";
import SubmitForm from "../SubmitForm/SubmitForm";

const Home = () => {
	const [submitted, setSubmitted] = useState(false);
	const [happyHours, setHappyHours] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);

	const handleZipSubmit = (result) => {
		setSubmitted(!submitted);
		setHappyHours(result);
	};

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		// cleanup
		return () => window.removeEventListener("resize", handleResize);
	});

	const isMobile = width <= 480;

	return (
		<>
			<Title />
			<Clock
				submitted={submitted}
				happyHours={happyHours}
				setHappyHours={setHappyHours}
				handleZipSubmit={handleZipSubmit}
				isMobile={isMobile}
			/>
			{isMobile ? (
				<SubmitForm handleZipSubmit={handleZipSubmit} submitted={submitted} />
			) : (
				<></>
			)}
		</>
	);
};

export default Home;
