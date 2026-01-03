import { useEffect, useRef, useState } from "react"

const App5 = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const inputElement = useRef();
    const prevInputValue = useRef(inputValue);

    const focusInput = () => inputElement.current.focus();

    useEffect(() => {
        count.current = count.current + 1;
    });

    useEffect(() => {
        prevInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <p>Type in the input field:</p>
            <input
                ref={inputElement}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
            <button onClick={focusInput}>Focus Input</button>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {prevInputValue.current}</h2>
        </>
    );
}

export default App5;