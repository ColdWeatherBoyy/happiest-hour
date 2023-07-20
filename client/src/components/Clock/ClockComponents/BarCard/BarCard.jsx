function Card({ name, stars, rating, xval, yval }) {
  return (
    <div
      style={{
        position: `absolute`,
        zIndex: `2`,
        // border: `1px solid green`,
        background: 'black',
        borderRadius: '5%',
        color: 'whitesmoke',
        width: `20%`,
        height: `20%`,
        fontSize: 'small',
        textAlign: `center`,
        transform: `translateX(${xval}px) translateY(${yval}px)`,
      }}
    >
      <p
        style={{
          marginBottom: "0",
        }}
      >
        {name}
      </p>
      <p
        style={{
          marginBottom: "0",
        }}
      >{stars}</p>
      <p
        style={{
          marginBottom: "0",

        }}
      >{rating}</p>
    </div>
  );
}

export default Card;

// if width = 20%, then that's 20% of the container
// we have access to the container dimensions in DataDisplay
// subtracting 10% of the container width from xval & yval might move the cards to where they need to be
