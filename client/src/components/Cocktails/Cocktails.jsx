import './Cocktails.css';
import blackMartini from '../../assets/black-martini.png';
import blackWine from '../../assets/black-wine.png';

import cocktail1 from '../../assets/cocktail1.png';
import cocktail2 from '../../assets/cocktail2.png';
import cocktail3 from '../../assets/cocktail3.png';
import cocktail4 from '../../assets/cocktail4.png';
import cocktail5 from '../../assets/cocktail5.png';
import cocktail6 from '../../assets/cocktail6.png';
import cocktail7 from '../../assets/cocktail7.png';


function Cocktails () {return(
    <div className="cocktails">
        {/* <img src={blackMartini} alt="martini glass" />
        <img src={blackWine} alt="wine glass" id='wine'/> */}

        <img src={cocktail1} alt="cocktail" />
        <img src={cocktail4} alt="cocktail" />
        <img src={cocktail3} alt="cocktail" />
        <img src={cocktail2} alt="cocktail" id='orange' />
        <img src={cocktail5} alt="cocktail" />
    </div>
)}

export default Cocktails;
