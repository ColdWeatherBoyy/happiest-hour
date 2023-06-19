import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const SubmitForm = ({ onClick }) => {
	const [zipCode, setZipCode] = useState("");

	const validateZipCode = (zipCode) => {
		const zipCodeRegex = /^\d{5}$/;
		return zipCodeRegex.test(zipCode);
	};

	const handleOnClick = () => {
		if (validateZipCode(zipCode)) {
			onClick(zipCode);
		} else alert("Please enter a valid zip code");
	};

	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="zipCode">
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Zip Code"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
					<Form.Text className="text-muted">
						Don't you want to know where to drink?
					</Form.Text>
				</Form.Group>
				<Button variant="primary" onClick={handleOnClick}>
					Let's Get Happy
				</Button>
			</Form>
		</>
	);
};

export default SubmitForm;