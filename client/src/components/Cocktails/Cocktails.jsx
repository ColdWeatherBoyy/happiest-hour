import './Cocktails.css'
import blackMartini from '../../assets/black-martini.png';
import blackWine from '../../assets/black-wine.png';

function Cocktails () {return(
    <div className="cocktails">
        <img src={blackMartini} alt="martini glass" />
        <img src={blackWine} alt="wine glass" id='wine'/>

        
        <img src={blackMartini} alt="martini glass" />
        <img src={blackMartini} alt="martini glass" />
        <img src={blackMartini} alt="martini glass" />
    </div>
)}

export default Cocktails;
