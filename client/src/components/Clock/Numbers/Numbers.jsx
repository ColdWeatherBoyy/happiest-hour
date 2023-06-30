import './Numbers.css'
import { useState, useEffect } from 'react';


const Numbers = () => {
    const [rotation, setRotation] = useState(0);
    const [color, setColor] = useState("000000");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    
    const placeMarkings = () => {
        let rotation = 30;
        let color = "000FF";
        let height = 50;
        let width = 5;
        
        setRotation(rotation);
        setColor(color);
        setHeight(height);
        setWidth(width);
    };

    useEffect (() => {
        placeMarkings()
    }, []);

    console.log(rotation, color, height, width)

    return(
        <div className='outer-clock-face'>
            <div 
                className="marking" 
                style={{
                    position: `absolute`,
                    left: `49.5%`,
                    transformOrigin: `bottom left`,
                    backgroundColor: `#${color}`,
                    width: `${width}px`,
                    height: `${height}%`,
                    transform: `rotate(${rotation}deg)`
                }}
            >
            </div>
            <div className="inner-clock-face"></div>
        </div>
    )
};

export default Numbers; 
