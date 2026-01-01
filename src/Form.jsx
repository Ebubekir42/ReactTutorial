import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("John");
    const [mytxt, setMytxt] = useState("Text");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleChange2 = (e) => {
        setMytxt(e.target.value);
    }

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
            <textarea value={mytxt} onChange={handleChange2} />
            <p>Current value: {mytxt}</p>
            <input type="submit" />
        </form>
    );
};

export default MyForm;