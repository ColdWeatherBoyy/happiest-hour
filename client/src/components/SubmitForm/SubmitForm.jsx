import "../Clock/Clock.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import validateZipCode from "../../utils/validateZip";

const SubmitForm = ({ setSubmittedZip }) => {
	const [zipCode, setZipCode] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateZipCode(zipCode)) {
			setSubmittedZip(zipCode);
		} else alert("Please enter a valid zip code");
	};

	return (
		<>
			<Form
				id="submit"
				className="d-flex flex-column align-items-center"
				onSubmit={handleSubmit}
			>
				<Form.Group className="mb-2 col-5 col-sm-3 col-lg-2" controlId="zipCode">
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Zip Code"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Let's Get Happy!
				</Button>
			</Form>
		</>
	);
};

export default SubmitForm;
