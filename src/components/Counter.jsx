import { useState } from "react";
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="container">
            <p className="count">{count}</p>
            <div className="buttons">
                <button onClick={decrementCount} className="button">Decrement</button>
                <button onClick={resetCount} className="button">Reset</button>
                <button onClick={incrementCount} className="button">Increment</button >
            </div >
        </div >
    );
}

export default Counter