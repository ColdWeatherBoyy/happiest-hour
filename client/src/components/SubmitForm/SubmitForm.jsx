import "../Clock/Clock.css";
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
			<Form id="submit" className="d-flex flex-column align-items-center text-center">
				<Form.Group className="mb-2 col-8" controlId="zipCode">
					<Form.Label>Zip Code</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Zip Code"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</Form.Group>
				<Button className="col-5" variant="primary" onClick={handleOnClick}>
					Search
				</Button>
			</Form>
		</>
	);
};

export default SubmitForm;
