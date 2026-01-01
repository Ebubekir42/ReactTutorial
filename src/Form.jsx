import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("John");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    console.log("test");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Current value: {name}</p>
            <input type="submit" />
        </form>
    );
};

export default MyForm;