function Card({ name, rating, reviews }) {
  return (
    <div
      style={{
        visibility: `hidden`,
        border: `1px solid green`,
        width: `25%`,
        textAlign: `center`,
        position: `absolute`,
        bottom: `50%`,
        left: `50%`,
        transformOrigin: `center`,
        transform: `translate(-50%, 50%)`,
        // transform: `translate(-50%, 50%) rotate(${( (item.key + 1)/12 ) * 360}deg)`,
        zIndex: `2`,
      }}
    >
      <p>{name}</p>
      <p>{rating}/5 stars</p>
      <p>{reviews} reviews</p>
    </div>
  );
}

export default Card;
