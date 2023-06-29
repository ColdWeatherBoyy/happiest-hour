import './Numbers.css'
import { useEffect } from 'react';

let rotation;
let color;
let height;
let width;

const Numbers = () => {
    
    const placeMarkings = () => {
        rotation = 30;
        color = (0,0,0);
        height = 50;
        width = 5;
        
        return(
            rotation,
            color,
            height,
            width
        )
    }

    useEffect (() => {
        placeMarkings()
        console.log(rotation, color, height, width)
    }, []);

    return(
        <div className='outer-clock-face'>
            <div 
                className="marking" 
                style={{
                    position: `absolute`,
                    left: `45.5%`,
                    transformOrigin: `bottom left`,
                    backgroundColor: `${color}`,
                    width: `${width}px`,
                    height: `${height}%`,
                    transform: `rotate(${rotation}deg)`}}></div>
            {/* <div className="marking marking-1"></div>
            <div className="marking marking-2"></div>
            <div className="marking marking-3"></div>
            <div className="marking marking-4"></div> */}
            <div className="inner-clock-face"></div>
        </div>
    )
};

export default Numbers; 
