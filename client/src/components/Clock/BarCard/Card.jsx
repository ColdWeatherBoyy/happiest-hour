function Card({ name, rating, xval, yval }) {
	return (
		<div
			style={{
				position: `absolute`,
				zIndex: `2`,
				bottom: `50%`,
				left: `50%`,
				border: `1px solid green`,
				width: `20%`,
				textAlign: `center`,
				transform: `translateX(${xval}px) translateY(${yval}px)`,
			}}
		>
			<p>{name}</p>
			<p>{rating}/5 stars</p>
			{/* <p>{reviews} reviews</p> */}
		</div>
	);
}

export default Card;
