import React, { useState, useEffect } from "react";
import getHappyHours from "../../utils/yelpRequest";

function YelpList({ zipCode }) {
	const [happyHours, setHappyHours] = useState([]);

	useEffect(() => {
		if (!zipCode) {
			return;
		}
		const fetchData = async () => {
			try {
				const result = await getHappyHours(zipCode);
				setHappyHours(result);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [zipCode]);

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

export default YelpList;
