import React, { useState, useEffect } from "react";

function HappyHourList() {
	const [happyHours, setHappyHours] = useState([]);

	const getHappyHours = async () => {
		try {
			const response = await fetch("/api/yelp", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			console.log(data);

			setHappyHours(data.businesses);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getHappyHours();
	}, []);

	return (
		<div>
			{/* make a ul with no styling */}
			<ul style={{ listStyleType: "none" }}>
				{happyHours.map((happyHour) => (
					<li key={happyHour.id}>
						<h2>
							<a href={happyHour.url} target="_blank" rel="noreferrer noopener">
								{happyHour.name}
							</a>
						</h2>
						<p>
							Rating: {happyHour.rating}/5 after {happyHour.review_count} reviews
						</p>
						<p>{happyHour.location.display_address[0]}</p>
						<p>{happyHour.location.display_address[1]}</p>
						<p>{!happyHour.is_closed ? "Open now" : "Closed"}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default HappyHourList;
