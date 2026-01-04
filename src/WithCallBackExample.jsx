import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick, text }) => {
    console.log(`Child ${text} button rendered`);
    return <button onClick={onClick}>{text}</button>;
});

const Button1 = ({ onClick, text }) => {
    console.log(`Child ${text} button rendered`);
    return <button onClick={onClick}>{text}</button>;
}

const WithoutCallBackExample = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // const handleClick1 = () => setCount1(c => c + 1);
    // const handleClick2 = () => setCount2(c => c + 1);
    const handleClick1 = useCallback(() => {
        setCount1(c => c + 1);
    }, [count1]);
    const handleClick2 = useCallback(() => {
        setCount2(c => c + 1);
    }, [count2]);

    console.log("Parent rendered");

    return (
        <div>
            <h2>Without useCallback:</h2>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <Button text="Button 1" onClick={handleClick1} />
            <Button text="Button 2" onClick={handleClick2} />
        </div>
    );
}

export default WithoutCallBackExample;