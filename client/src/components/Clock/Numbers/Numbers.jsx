import NumberItem from './NumberItem'

const Numbers = () => {
    const numbersArr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    let xvalue;
    let yvalue;

    return(
        <div>
            {numbersArr.map((arrayNum, index) => {

                if((3 < arrayNum) && (arrayNum < 7)) {
                    console.log(arrayNum);
                    xvalue = 70 + (5*index);
                    yvalue = 50 + (5*index);
                }

                return(
                    <NumberItem 
                        x={xvalue} 
                        y={yvalue} 
                        num={arrayNum} 
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default Numbers; 
