import './Numbers.css'

const Numbers = () => {
    const numbersArr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return(
        <div>
            {numbersArr.map((num, id) => {
                return(<p className="numbers" key={id}>{num}</p>)
            })}
        </div>
    )
}

export default Numbers; 
