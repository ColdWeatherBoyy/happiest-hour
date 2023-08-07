import "./SubmitForm.css";
import "../Clock/Clock.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import getHappyHoursFromYelp from "../../utils/getHappyHoursFromYelp";
import validateZipCode from "../../utils/validateZip";

const SubmitForm = ({ handleZipSubmit }) => {
	// Sets up state for zip code input
	const [zipCode, setZipCode] = useState("");

	// Function to fetch data from Yelp API
	const fetchData = async () => {
		try {
			// Ues getHappyHoursFromYelp function to fetch data from Yelp API
			const result = await getHappyHoursFromYelp(zipCode);
			if (result.length === 0) {
				alert("Uh oh, there might not be any happy hours in your area... Try again!");
			}
			// Passes data to parent component using handleZipSubmit prop
			handleZipSubmit(result);
		} catch {
			alert("Was that really a valid Zip Code? Try again...");
		}
	};

	// Function to handle zip code submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Resets zip code input
		setZipCode("");
		// Checks if zip code input is empty
		if (!zipCode) return alert("Please enter a zip code");
		// Checks if zip code input is valid, using validateZipCode function
		if (validateZipCode(zipCode)) {
			// If zip code is valid, fetch data from Yelp API
			fetchData();
		} else alert("Please enter a valid zip code");
	};

	return (
		<>
			<Form id="submit" onSubmit={handleSubmit}>
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
