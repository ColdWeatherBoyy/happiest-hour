import clockStyle from './Clock.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SubmitForm from "../SubmitForm/SubmitForm";
import Numbers from './Numbers';


const Clock = () => {
    let { width } = useWindowDimensions();
    let diameter = width/1.5;
    
    // [numbers, setNumbers] = useState(0);

    // function increaseNumber() {
    //     for(numbers=1 ; numbers<13 ; numbers++) {
            
    //     }
    // }

    // let numbers = Array.from({[], x => x+1});

    return(
        <div className='clock' style={{width: diameter, height: diameter}}>
            <Numbers nums={numbers}/>
            <SubmitForm onClick={(zipCode) => setSubmitZip(zipCode)} />
        </div>
    )
}

export default Clock;

// number appears on screen from <Number /> component
// now I need to write a function that increases the 'num' to 12 & get that to render
// does NOT have to be dynamic yet
