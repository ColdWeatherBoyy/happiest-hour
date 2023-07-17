function Card({ name, rating, xval, yval }) {

  return (
    <div
      style={{
        position: `absolute`,
        zIndex: `2`,
        border: `1px solid green`,
        width: `20%`,
        height: `auto%`,
        textAlign: `center`,
        transform: `translateX(${xval}px) translateY(${yval}px)`,
      }}
    >
      <p>{name}</p>
      <p>{rating}/5 stars</p>
    </div>
  );
}

export default Card;

// if width = 20%, then that's 20% of the container
// we have access to the container dimensions in DataDisplay
// subtracting 10% of the container width from xval & yval might move the cards to where they need to be
