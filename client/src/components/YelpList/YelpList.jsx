import React, { useState, useEffect } from "react";
import getHappyHours from "../../utils/yelpRequest";

function YelpList({ submittedZip }) {
	const [happyHours, setHappyHours] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!submittedZip) {
			return;
		}
		const fetchData = async () => {
			try {
				const result = await getHappyHours(submittedZip);
				if (!result && count < 2) {
					alert("Was that really a valid Zip Code? Try again...");
					setCount(count + 1);
					return;
				} else if (!result && count >= 2) {
					alert("Maybe there just aren't any happy hours nearby ¯\\_(ツ)_/¯");
					return;
				}

				setHappyHours(result);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [submittedZip]);

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
