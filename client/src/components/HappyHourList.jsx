import React, { useState, useEffect } from "react";

function HappyHourList() {
	const [happyHours, setHappyHours] = useState([]);

	const getHappyHours = async () => {
		try {
			const response = await fetch("http://localhost:3001/api/yelp", {
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
			<p>This is where the list will go temporarily</p>
			<ul>
				{happyHours.map((happyHour) => (
					<li key={happyHour.id}>
						<h2>
							<a href={happyHour.url} target="_blank" rel="noreferrer noopener">
								{happyHour.name}
							</a>
						</h2>
						<p>
							Rating: {happyHour.rating} after {happyHour.review_count} reviews
						</p>
						<p>{happyHour.display_address}</p>
						<p>{!happyHour.is_closed ? "Open now" : "Closed"}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default HappyHourList;
