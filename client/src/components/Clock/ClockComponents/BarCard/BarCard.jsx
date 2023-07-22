function BarCard({ name, rating, xval, yval }) {
  return (
    <div
      style={{
        position: `absolute`,
        zIndex: `2`,
        // border: `1px solid green`,
        background: "rgb(255, 186, 108)",
        borderRadius: "50%",
        color: "rgb(22, 96, 12)",
        // width: `30%`,
        // height: `30%`,
        width: `25%`,
        height: `25%`,
        textAlign: `center`,
        transform: `translateX(${xval}px) translateY(${yval}px)`,
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
          transformOrigin: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
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
      >
        {rating}
      </p>
    </div>
  );
}

export default BarCard;

// if width = 20%, then that's 20% of the container
// we have access to the container dimensions in DataDisplay
// subtracting 10% of the container width from xval & yval might move the cards to where they need to be
