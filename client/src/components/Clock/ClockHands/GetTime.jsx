import './ClockHands.css';

let now = new Date();

function GetTime() {
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log(hour, minute, second);

    return(
        <div className='clock-hands'>
            <div>
                <div id="outer-center-point"></div>
                <div id="inner-center-point"></div>
            </div>
            <div className="hour-hand"></div>
            <div className="minute-hand"></div>
            <div className="second-hand"></div>
            {/* <h1 id='test'>test</h1> */}
        </div>
    )
}

export default GetTime;
