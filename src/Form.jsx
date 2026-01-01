import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("John");
    const [mytxt, setMytxt] = useState("Text");
    const [myCar, setMyCar] = useState("Volvo");
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        // setName(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setInputs(pre => ({ ...pre, [name]: value }));
    }

    const handleChange2 = (e) => {
        setMytxt(e.target.value);
    }
    const handleChange3 = (e) => {
        setMyCar(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <label>Enter your name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Current value: {name}</p>
            <textarea value={mytxt} onChange={handleChange2} />
            <p>Current value: {mytxt}</p>
            <select value={myCar} onChange={handleChange3}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select> */}
            <label>First name:
                <input type="text" name="firstname" value={inputs.firstname || ""} onChange={handleChange} />
            </label>
            <label>Last name:
                <input type="text" name="lastname" value={inputs.lastname || ""} onChange={handleChange} />
            </label>
            <p>Current value: {inputs.firstname} - {inputs.lastname}</p>
            <input type="submit" />
        </form>
    );
};

export default MyForm;