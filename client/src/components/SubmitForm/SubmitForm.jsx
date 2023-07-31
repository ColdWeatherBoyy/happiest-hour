import "./SubmitForm.css";
import "../Clock/Clock.css";
import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import getHappyHoursFromYelp from "../../utils/getHappyHoursFromYelp";
import validateZipCode from "../../utils/validateZip";

const SubmitForm = ({ handleZipSubmit, submitted }) => {
	const [zipCode, setZipCode] = useState("");

	// const submissionStates = {
	// 	canEnter: submitted ? "disabled" : "",
	// 	canSubmit: submitted ? "hidden" : "visible",
	// };

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
		setZipCode('');
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
						<Form.Group
							// className="mb-2 col-9"
							controlId="zipCode"
							aria-label="Zip Code submission form"
						>
							<Form.Control
								type="text"
								placeholder="Enter Zip Code"
								// className="text-center"
								value={zipCode}
								onChange={(e) => setZipCode(e.target.value)}
								// disabled={submissionStates.canEnter}
							/>
						</Form.Group>

					</div>
					<div className="col-3">
						<Button
							// className="col-4 p-0"
							// className="w-100"
							variant="secondary"
							type="submit"
							// style={{ visibility: submissionStates.canSubmit }}
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
