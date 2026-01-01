import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("John");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form>
            <label>Enter your name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Current value: {name}</p>
        </form>
    );
};

export default MyForm;