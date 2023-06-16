import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const SubmitForm = ({ onClick }) => {
	const [zipCode, setZipCode] = useState("");
	// const zipCode = /^\d{5}$/;
	// const zipCodeInput = document.getElementById("zipCode");
	// if (zipCodeInput.value.match(zipCode)) {
	// 	alert("Valid zip code");
	// 	return true;
	// } else {
	// 	alert("Invalid zip code");
	// 	return false;
	// }

	// useEffect(() => {
	// 	console.log(zipCode);
	// }, [zipCode]);

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
				<Button variant="primary" onClick={() => onClick(zipCode)}>
					Let's Get Happy
				</Button>
			</Form>
		</>
	);
};

export default SubmitForm;
