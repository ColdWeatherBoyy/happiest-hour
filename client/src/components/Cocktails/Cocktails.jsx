import "./Cocktails.css";
import cocktailPics from "./CocktailsArray";

function Cocktails() {
	return (
		// Maps through cocktail pics array and renders each image on page
		<div className="cocktails">
			{cocktailPics.map(({ id, pic, color }) => {
				return <img key={id} src={pic} alt="cocktail" id={color} />;
			})}
		</div>
	);
}

export default Cocktails;
