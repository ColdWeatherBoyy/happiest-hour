function Card({ name, rating, xval, yval }) {
	const translateX = `calc(${xval}px - 63%)`;
	const translateY = `calc(${yval}px - 50%)`;
	return (
		<div
			style={{
				position: `absolute`,
				zIndex: `2`,
				border: `1px solid green`,
				width: `20%`,
				textAlign: `center`,
				// right: `100%`,
				transform: `translateX(${translateX}) translateY(${translateY})`,
			}}
		>
			<p>{name}</p>
			<p>{rating}/5 stars</p>
			{/* <p>{reviews} reviews</p> */}
		</div>
	);
}

export default Card;
