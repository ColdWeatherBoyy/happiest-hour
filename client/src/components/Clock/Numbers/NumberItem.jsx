import { useState } from "react";

const NumberItem = () => {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);


    // let i
    // for(i=0 ; i<13 ; i++) {
    //     setX(x+16);
    //     setY(y+16);
    // }
    console.log('x-value is: '+ x + ' and y-value is: '+ y)

    const calcTranslation = () => {

        // for(x=0 ; x<13 ; x++) {
        //     setX(x+16);
        // }
        // for(y=0 ; y<13 ; y++){
        //     setY(y+16);
        // }


        // numbersArr.map((item) => {
            
        //     return(
        //         <p style={{transform: `translate(${x}%, ${y}%)` }}></p>
        //     )
        // })

        // if((numbersArr[i] < numbersArr[4]) && (numbersArr[i] > numbersArr[9])) {
        //     setX(x + 16);
        // } else if((numbersArr[i] > numbersArr[3]) && (numbersArr[i] < numbersArr[10])) {
        //     setX()
        // } else {
        //     x = 0
        // }
    }

    return(
        {
            x,
            y
        }
    )
}

export default NumberItem;
