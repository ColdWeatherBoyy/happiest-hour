import "./ClockHands.css";
import { useState, useEffect, useRef } from "react";

function ClockHands() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let hourDegree =
    ((now.getHours() % 12) / 12) * 360 + (now.getMinutes() / 60) * 30;
  let minuteDegree = (now.getMinutes() / 60) * 360;
  let secondDegree = (now.getSeconds() / 60) * 360;

  const centerRef = useRef(null);
  const previousDimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const center = centerRef.current;

    if(center) {
		const { width, height } = center.getBoundingClientRect();
		const previousDimensions = previousDimensionsRef.current;
		
		if( (width !== previousDimensions.width) || (height !== previousDimensions.height) ){
			console.log('dimensions changed')
		} else {
			console.log('center is the same');
		}

		previousDimensionsRef.current = ({ width, height });
	}

	// get the current width, height dimensions
	// if the width, height of previousDimRef.curr are !== to width, height @ current 
		// then find new
		// else, keep current width, height
	





    // if (center) {
    //   const rect = center.getBoundingClientRect();
    //   console.log(
    //     "Top: " + rect.top,
    //     "Right: " + rect.right,
    //     "Bottom: " + rect.bottom,
    //     "Left: " + rect.left
    //   );
    // }
  });

  return (
    <div>
      <div id="outer-center-point"></div>
      <div id="inner-center-point"></div>
      <div
        id="hour-hand"
        style={{ transform: `rotate(${hourDegree}deg)` }}
      ></div>
      <div
        id="minute-hand"
        style={{ transform: `rotate(${minuteDegree}deg)` }}
      ></div>
      <div
        id="second-hand"
        style={{ transform: `rotate(${secondDegree}deg)` }}
      ></div>
      <div ref={centerRef} className="inner-clock-face"></div>
    </div>
  );
}

export default ClockHands;

// want to find center point of clock --> find (x, y) of inner circle
// use (x, y) as (h, k) in circle equation
