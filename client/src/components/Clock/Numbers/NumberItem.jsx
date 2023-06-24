const NumberItem = ({ num }) => {

    return(
        <p 
            style=
                    {{position: `absolute`, 
                    left: `50%`, 
                    top: `50%`, 
                    zIndex: `1`, 
                    transform: `translate(-50%, -50%)`}}
            >{num}
        </p>
        // left & top control movement related to parent (circle)
        // translate controls the movement of the center of the <p> 
        // in this case, 50% of its length in either direction
    )
}

export default NumberItem;


// within NumberItem
    // center all numbers @ circle centerpoint
// within Numbers
    // use transform: rotate to get numbers @ respective spots
    // use transform: rotate to rotate numbers right side up
