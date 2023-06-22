import './Numbers.css'
import NumberItem from './NumberItem'

const Numbers = () => {
    const numbersArr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    let { x, y } = NumberItem()

    return(
        <div>
            {numbersArr.map((num, id) => {
                return(
                    <p 
                        style={{transform: `translate(${x}%, ${y}%)` }} 
                        className="numbers" 
                        key={id}
                    >
                        {num}
                    </p>
                )
            })}
        </div>
    )
}

export default Numbers; 
