import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Cocktails from "../Cocktails/Cocktails";
import Clock from "../Clock/Clock";
import SubmitForm from "../SubmitForm/SubmitForm";
import "./Home.css";

const Home = () => {
	// Sets up states that will be passed to children components as props
	// Tracks whether user has submitted a zip code
	const [submitted, setSubmitted] = useState(false);
	// Tracks data returned from Yelp API
	const [happyHours, setHappyHours] = useState([]);
	// Tracks the width of the window
	const [width, setWidth] = useState(window.innerWidth);

	// Function to handle zip code submission by updating other states
	const handleZipSubmit = (result) => {
		setSubmitted(true);
		setHappyHours(result);
	};

	useEffect(() => {
		// function to update width state when window is resized
		const handleResize = () => setWidth(window.innerWidth);
		// event listener to listen for window resize
		window.addEventListener("resize", handleResize);
		// cleanup
		return () => window.removeEventListener("resize", handleResize);
	});

	// Checks if window width is less than or equal to 540px and defines isMobile variable
	const isMobile = width <= 540;

	// Defines styles for mobile display
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
					{/* Title component with relevant props */}
					<Title
						handleZipSubmit={handleZipSubmit}
						isMobile={isMobile}
						submitted={submitted}
					/>
					{/* Cocktails component for background images */}
					<Cocktails />
					{/* Clock component with relevant props */}
					<Clock
						submitted={submitted}
						happyHours={happyHours}
						setHappyHours={setHappyHours}
						handleZipSubmit={handleZipSubmit}
						isMobile={isMobile}
					/>
					{/* SubmitForm component with relevant props. Only displays if isMobile is true; otherwise, SubmitForm lives in Title */}
					{isMobile ? <SubmitForm handleZipSubmit={handleZipSubmit} /> : <></>}
				</div>
			</div>
		</>
	);
};

export default Home;
