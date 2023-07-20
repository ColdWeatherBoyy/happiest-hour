import "./SubmitForm.css";
import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import getHappyHoursFromYelp from "../../utils/getHappyHoursFromYelp";
import validateZipCode from "../../utils/validateZip";

const SubmitForm = ({ handleZipSubmit, submitted, isMobile }) => {
	const [zipCode, setZipCode] = useState("");

	const submissionStates = {
		canEnter: submitted ? "disabled" : "",
		canSubmit: submitted ? "hidden" : "visible",
	};

	const fetchData = async () => {
		try {
			const result = await getHappyHoursFromYelp(zipCode);
			if (result.length === 0) {
				alert("Uh oh, there might not be any happy hours in your area... Try again!");
			}
			handleZipSubmit(result);
		} catch {
			alert("Was that really a valid Zip Code? Try again...");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!zipCode) return alert("Please enter a zip code");
		if (validateZipCode(zipCode)) {
			fetchData();
		} else alert("Please enter a valid zip code");
	};

	const topValue = isMobile ? "70%" : "75%";

	return (
		<>
			<Form
				id="submit"
				className="d-flex flex-column align-items-center text-center"
				onSubmit={handleSubmit}
				style={{ top: topValue }}
			>
				<Form.Group
					className="mb-2 col-8"
					controlId="zipCode"
					aria-label="Zip Code submission form"
				>
					<Form.Control
						type="text"
						placeholder="Enter Zip Code"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
						disabled={submissionStates.canEnter}
					/>
				</Form.Group>
				<Button
					className="col-5"
					variant="primary"
					type="submit"
					style={{ visibility: submissionStates.canSubmit }}
				>
					Search
				</Button>
			</Form>
		</>
	);
};

export default SubmitForm;
