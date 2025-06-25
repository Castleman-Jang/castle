import { useState } from "react";

const FuncOneNumTwoBtn = () =>{
    const [number1, setNumber1] = useState(0);

        const number1SumOne = () =>{
        setNumber1(number1 + 1);
    }
        const number1MinOne = () =>{
        setNumber1(number1 - 1);
    }

    return(
        <div>
            <button onClick={number1MinOne}>-</button>
            <h1 style={{display:'inline'}}>{number1}</h1>
            <button onClick={number1SumOne}>+</button>
        </div>
    )
}

export default FuncOneNumTwoBtn;