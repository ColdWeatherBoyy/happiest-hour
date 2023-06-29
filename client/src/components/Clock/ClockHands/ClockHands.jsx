import './ClockHands.css';
import { useState, useEffect } from 'react';


function ClockHands() {

    let now = new Date();
    let hourDegree = ((now.getHours() % 12) / 12) * 360 + (now.getMinutes() / 60) * 30;;
    let minuteDegree = (now.getMinutes() / 60) * 360;;
    let secondDegree = (now.getSeconds() / 60) * 360;
    

    return(
        <div className='clock-hands'>
            <div id='center-point'>
                <div id="outer-center-point"></div>
                <div id="inner-center-point"></div>
            </div>
            <div id="minute-hand" style={{transform: `rotate(${minuteDegree}deg)`}}></div>
            <div id="hour-hand" style={{transform: `rotate(${hourDegree}deg)`}}></div>
            <div id="second-hand" style={{transform: `rotate(${secondDegree}deg)`}}></div>
        </div>
    )
}

export default ClockHands;
