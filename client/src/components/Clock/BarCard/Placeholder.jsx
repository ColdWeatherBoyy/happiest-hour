import placeholderData from "../../../assets/PlaceholderData";
import "./Placeholder.css";
import Card from "./Card";

const Placeholder = () => {
  return (
    <div className="container">
      {placeholderData.map((item) => {
        return (
          <Card
            key={item.key}
            name={item.name}
            rating={item.rating}
            reviews={item.review_count}
          />
        );
      })}
    </div>
  );
};

export default Placeholder;
