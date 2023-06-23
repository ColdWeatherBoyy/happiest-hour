import './Numbers.css'
import NumberItem from './NumberItem'

const Numbers = () => {
    const numbersArr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    let xvalue = 50;
    let yvalue = 50

    return(
        <div>
            {numbersArr.map((arrayNum, id) => {
                return(
                    <NumberItem x={xvalue} y={yvalue} num={arrayNum} key={id}/>
                )
            })}
        </div>
    )
}

export default Numbers; 
