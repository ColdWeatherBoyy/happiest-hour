import "./SubmitForm.css";
import "../Clock/Clock.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import getHappyHoursFromYelp from "../../utils/getHappyHoursFromYelp";
import validateZipCode from "../../utils/validateZip";

const SubmitForm = ({ handleZipSubmit }) => {
	const [zipCode, setZipCode] = useState("");

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
		setZipCode("");
		if (!zipCode) return alert("Please enter a zip code");
		if (validateZipCode(zipCode)) {
			fetchData();
		} else alert("Please enter a valid zip code");
	};

	return (
		<>
			<Form
				id="submit"
				// className="d-flex text-center"
				onSubmit={handleSubmit}
			>
				<div className="d-flex flex-row justify-content-center ">
					<div className="col-6">
						<Form.Group controlId="zipCode" aria-label="Zip Code submission form">
							<Form.Control
								type="text"
								placeholder="Enter Zip Code"
								aria-label="Zip Code"
								value={zipCode}
								onChange={(e) => setZipCode(e.target.value)}
								style={{
									marginRight: "-2.5px",
									borderTopRightRadius: "0",
									borderBottomRightRadius: "0",
									boxShadow: "inset 0 0 1px rgba(0, 0, 0, 0.2)",
									padding: "0.375rem 0.5rem",
								}}
							/>
						</Form.Group>
					</div>
					<div className="col-3">
						<Button
							variant="secondary"
							type="submit"
							aria-label="Submit Zip Code"
							style={{
								marginLeft: "-2.5px",
								border: "var(--bs-border-width) solid var(--bs-border-color)",
								borderLeft: "none",
							}}
						>
							Search
						</Button>
					</div>
				</div>
			</Form>
		</>
	);
};

export default SubmitForm;
