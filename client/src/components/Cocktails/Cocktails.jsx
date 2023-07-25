import "./Cocktails.css";
import cocktailPics from "./CocktailsArray";

function Cocktails() {
  return (
    <div className="cocktails">
      {cocktailPics.map(({ id, pic, color }) => {
        return <img key={id} src={pic} alt="cocktail" id={color} />;
      })}
    </div>
  );
}

export default Cocktails;
