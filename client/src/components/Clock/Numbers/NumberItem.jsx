const NumberItem = ({ num, x, y }) => {

    return(
        <p style={{position: `absolute`, left: `${x}%`, top: `${y}%`, zIndex: `1`, transform: `translate(-50%, -50%)` }}>{num}</p>
        // left & top control movement related to parent (circle)
        // translate controls the movement of the center of the <p> in this case, 50% of its length in either direction
    )
}

export default NumberItem;
