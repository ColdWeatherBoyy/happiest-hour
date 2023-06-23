const NumberItem = ({ num }) => {

    const calcTranslation = () => {
        let x = 0;
        let y = 0;
        
        return(
            {
                x,
                y
            }
        )    
    }

    let { x, y } = calcTranslation();

    return(
        <p style={{position: `absolute`, left: `${x}%`, top: `${y}%`, zIndex: `1`, transform: `translate(-50%, -50%)` }}>{num}</p>
        // left & top control movement related to parent (circle)
        // translate controls the movement of the center of the <p> in this case, 50% of its length in either direction
    )
}

export default NumberItem;



// calcTranslations calculates x and y translations
    // either convert them to strings or use '' in style={...}
    // return x & y-values
// NumberItem returns <p style={{transform: `translate(${x}%, ${y}%)` }}>{num}</p> with 'num' as a prop

// render <NumberItem key={id} /> in Numbers
// render the <Numbers className='numbers' /> in Clock
