import "../Clock/Clock.css";
import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import validateZipCode from "../../utils/validateZip";

const SubmitForm = ({ setSubmittedZip }) => {
	const [zipCode, setZipCode] = useState("");
	const previousZipCodeRef = useRef("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!zipCode) return alert("Please enter a zip code");
		if (validateZipCode(zipCode)) {
			if (zipCode === previousZipCodeRef.current) {
				setSubmittedZip("");
				setTimeout(() => {
					setSubmittedZip(zipCode);
				}, 0);
			} else {
				setSubmittedZip(zipCode);
				previousZipCodeRef.current = zipCode;
			}
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
