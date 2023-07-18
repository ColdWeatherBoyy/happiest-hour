import "../Clock/Clock.css";
import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import getHappyHours from "../../utils/yelpRequest";
import validateZipCode from "../../utils/validateZip";

const SubmitForm = ({ handleZipSubmit }) => {
	const [zipCode, setZipCode] = useState("");

	const fetchData = async () => {
		try {
			const result = await getHappyHours(zipCode);
			if (result.length === 0) {
				alert("Uh oh, there might not be any happy hours in your area... Try again!");
			}
			handleZipSubmit(zipCode, result);
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

	return (
		<>
			<Form
				id="submit"
				className="d-flex flex-column align-items-center text-center"
				onSubmit={handleSubmit}
			>
				<Form.Group className="mb-2 col-8" controlId="zipCode">
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Zip Code"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</Form.Group>
				<Button className="col-5" variant="primary" type="submit">
					Search
				</Button>
			</Form>
		</>
	);
};

export default SubmitForm;
