import './ClockHands.css';
import { useState, useEffect } from 'react';

let now = new Date();
// const [hour, setHour] = useState(now.getHours());
// const [minute, setMinute] = useState(now.getMinutes());
// const [second, setSecond] = useState(now.getSeconds());

function ClockHands() {
    let hour = now.getHours();
    if(hour > 12) {
        hour - 12
    } else if(hour === 0) {
        hour = 12
    } else {
        console.log("all clear")
    }
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log(hour);

    const getTime = () => {
        let nowHour = document.getElementById('hour-hand');
        let hourDegree = 360 / nowHour
    }
    getTime();

    return(
        <div className='clock-hands'>
            <div id='center-point'>
                <div id="outer-center-point"></div>
                <div id="inner-center-point"></div>
            </div>
            <div id="minute-hand"></div>
            <div id="hour-hand" style={{transform: `rotate(30deg)`}}></div>
            <div id="second-hand"></div>
        </div>
    )
}

export default ClockHands;
