import './ClockHands.css';

let now = new Date();

function GetTime() {
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log(hour, minute, second);

    return(
        <div>
            <h1>placeholder</h1>
        </div>
    )
}

export default GetTime;
