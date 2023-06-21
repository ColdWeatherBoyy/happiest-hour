import clockStyle from './Clock.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SubmitForm from "../SubmitForm/SubmitForm";


const Clock = () => {
    let { width } = useWindowDimensions();
    let diameter = width/2;

    return(
        <div className='clock' style={{width: diameter, height: diameter}}>
            <SubmitForm onClick={(zipCode) => setSubmitZip(zipCode)} />
        </div>
    )
}

export default Clock;



// number.number$*12>div{$}
