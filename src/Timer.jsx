import { useEffect, useState } from "react"

const Timer = () => {
    const [count, setCount] = useState(1);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    // useEffect(() => {
    //     setCalculation(() => count * 2);
    // }, [count]);

    // return <h1>I've rendered {count} times!</h1>;
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}

export default Timer;