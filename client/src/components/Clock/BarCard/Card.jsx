function Card({ name, rating, reviews }) {
  return (
    <div
      style={{
        // visibility: `hidden`,
        border: `1px solid green`,
        width: `25%`,
        textAlign: `center`,
        position: `absolute`,
        bottom: `80%`,
        left: `37%`,
        transformOrigin: `center`,
        // transform: `translate(-50%, 50%) rotate(${( (item.key + 1)/12 ) * 360}deg)`,
        zIndex: `2`,
      }}
    >
      <p>{name}</p>
      <p>{rating}/5 stars</p>
      <p>{reviews} reviews</p>
      {/* <p>{item.is_closed ? 'Closed' : 'Open'}</p> */}
    </div>
  );
}

export default Card;
