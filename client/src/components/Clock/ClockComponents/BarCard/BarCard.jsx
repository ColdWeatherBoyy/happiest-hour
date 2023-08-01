import YelpLogo from "../../../../assets/yelp_logo.png";

function BarCard({ name, rating, review_count, link, xval, yval, fontSize }) {
	return (
		<div
			style={{
				position: `absolute`,
				zIndex: `2`,
				// border: `1px solid green`,
				background: "rgb(255, 186, 108)",
				borderRadius: "50%",
				color: "rgb(22, 96, 12)",
				fontSize: `${fontSize}%`,
				width: `25%`,
				height: `25%`,
				textAlign: `center`,
				transform: `translateX(${xval}px) translateY(${yval}px)`,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					width: "80%",
					height: "80%",
					backgroundColor: "rgb(255, 162, 55)",
					position: "absolute",
					borderRadius: "50%",
					zIndex: "-1",
					transformOrigin: "center",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			/>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				style={{
					marginBottom: "0",
					color: "rgb(22, 96, 12)",
					fontSize: "120%",
				}}
			>
				{name}
			</a>
			<p
				style={{
					marginBottom: "0",
				}}
			>
				{rating}
			</p>
			<p
				style={{
					marginBottom: "0",
					fontSize: "50%",
				}}
			>
				Based on {review_count} reviews
			</p>
			{/* <div style={{ width: "30%", margin: "0 auto" }}>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<img alt="yelp logo" src={YelpLogo} style={{ width: "100%" }} />
				</a>
			</div>{" "} */}
		</div>
	);
}

export default BarCard;
