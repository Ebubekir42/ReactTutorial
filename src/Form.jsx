import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("John");
    const [mytxt, setMytxt] = useState("Text");
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleChange2 = (e) => {
        setMytxt(e.target.value);
    }
    const handleChange3 = (e) => {
        setMyCar(e.target.value);
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
            <select value={myCar} onChange={handleChange3}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <input type="submit" />
        </form>
    );
};

export default MyForm;