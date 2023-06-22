const NumberItem = ({ numbersArr }) => {
    const calcTranslation = () => {

        if(numbersArr[i] <= 6) {
            const x = () => {
                x = x+15
            }
        } else if(6 < numbersArr[i] <= 11) {
            let x = -1*x
        }
    }

    return(
        {
            x,
            y
        }
    )
}

// I need the <p> with the numbers showing up from the numbersArr to each 
// have a {{style: transform: translate(x,y)}}

// so this component (NumberItem) should return a <p style={{transform: "{x}%","{y}%"}}>{num}</p>

// maybe try setting all the numbers in the middle, then they only need to travel 50% of 
// the container (the circle) and x or y units up, down, left, or right.
