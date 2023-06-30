import './Numbers.css'
import { useState, useEffect } from 'react';


const Numbers = () => {
    const [rotation, setRotation] = useState(0);
    const [color, setColor] = useState("000000");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    let num = Array.from({ length: 12 }).map((_, index) => {
        index = index + 1
        return(
            index
        )
    })
    console.log(num)
    
    const placeMarkings = () => {
        let rotation = (num/12) * 360;
        let color;
        let height;
        let width;

        if(num%3 === 0) {
            color = "000000";
            height = 12;
            width = 5;
        } else {
            color = "808080";
            height = 10;
            width = 3;
        }
        
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
