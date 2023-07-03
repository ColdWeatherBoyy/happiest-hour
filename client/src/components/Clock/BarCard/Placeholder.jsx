import placeholderData from "../../../assets/PlaceholderData";
import "./Placeholder.css";

const Placeholder = () => {
  return (
    <div className="container">
      {placeholderData.map((item) => {
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
            key={item.key}
          >
            <p>{item.name}</p>
            <p>{item.rating}/5 stars</p>
            <p>{item.review_count} reviews</p>
            {/* <p>{item.is_closed ? 'Closed' : 'Open'}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Placeholder;
