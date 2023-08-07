function BarCard({ name, rating, review_count, link, xval, yval, fontSize }) {
	return (
		// establishes size of each card based on container width
		// font size media query depending on screen size
		// transform value places each card around in a circle
		<div
			style={{
				position: `absolute`,
				zIndex: `2`,
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
				wordWrap: "break-word",
			}}
		>
			{/* internal color circle placed depending on card size */}
			<div
				style={{
					width: "85%",
					height: "85%",
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
				{name} {/* Bar Name with link */}
			</a>
			<p
				style={{
					marginBottom: "0",
				}}
			>
				{rating} {/* Rating of bar */}
			</p>
			<p
				style={{
					marginBottom: "0",
					fontSize: "85%",
				}}
			>
				{review_count} reviews {/* Number of reviews */}
			</p>
		</div>
	);
}

export default BarCard;
