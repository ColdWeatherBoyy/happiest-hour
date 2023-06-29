import arrow from '../../../assets/right-arrow.png';
import './ClockHands.css';

let now = new Date();

function GetTime() {
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log(hour, minute, second);

    return(
        <div>
            <img src={arrow} alt="hour hand" id='hour-hand'/>
        </div>
    )
}

export default GetTime;
