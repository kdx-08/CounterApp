import { useState } from "react";

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

    const styles = {
        container: {
            margin: 0,
            padding: 0,
            textAlign: "center",
        },
        count: {
            fontFamily: "Arial sans-serif",
            fontSize: "8rem",
        },
        buttons: {
            margin: "20px",
            padding: "20px",
        },
        button: {
            color: "white",
            backgroundColor: "rgb(0, 160, 255)",
            border: "none",
            borderRadius: "8px",
            padding: "16px",
            margin: "8px",
            fontSize: "1.2rem",
            cursor: "pointer",
        }
    };

    return (
        <div className="container" style={styles.container}>
            <p className="count" style={styles.count}>{count}</p>
            <div className="buttons" style={styles.buttons}>
                <button onClick={decrementCount} className="button" style={styles.button}>Decrement</button>
                <button onClick={resetCount} className="button" style={styles.button}>Reset</button>
                <button onClick={incrementCount} className="button" style={styles.button}>Increment</button>
            </div>
        </div>
    );
}

export default Counter