import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Cocktails from "../Cocktails/Cocktails";
import Clock from "../Clock/Clock";
import SubmitForm from "../SubmitForm/SubmitForm";
import "./Home.css";

const Home = () => {
	const [submitted, setSubmitted] = useState(false);
	const [happyHours, setHappyHours] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);

	const handleZipSubmit = (result) => {
		setSubmitted(true);
		setHappyHours(result);
	};

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		// cleanup
		return () => window.removeEventListener("resize", handleResize);
	});

	const isMobile = width <= 540;

	const isMobileDisplay = {
		display: isMobile ? "flex" : "",
		flexDirection: isMobile ? "column" : "",
		alignItems: isMobile ? "center" : "",
	};

	return (
		<>
			<div className="background">
				<div
					style={{
						display: isMobileDisplay.display,
						flexDirection: isMobileDisplay.flexDirection,
						alignItems: isMobileDisplay.alignItems,
					}}
				>
					<Title
						handleZipSubmit={handleZipSubmit}
						isMobile={isMobile}
						submitted={submitted}
					/>
					<Cocktails />
					<Clock
						submitted={submitted}
						happyHours={happyHours}
						setHappyHours={setHappyHours}
						handleZipSubmit={handleZipSubmit}
						isMobile={isMobile}
					/>
					{isMobile ? <SubmitForm handleZipSubmit={handleZipSubmit} /> : <></>}
				</div>
			</div>
		</>
	);
};

export default Home;
