import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("John");
    const [mytxt, setMytxt] = useState("Text");
    const [myCar, setMyCar] = useState("Volvo");
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        // setName(e.target.value);
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
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
        let fillings = "";
        if (inputs.tomato) fillings += "tomato";
        if (inputs.onion) {
            if (inputs.tomato) fillings += " and ";
            fillings += "onion";
        }
        console.log(inputs);
        console.log(`${inputs.firstname} wants a burger with ${fillings}`);
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
            <p>I want a burger with:</p>
            <label>
                Tomato:
                <input type="checkbox" name="tomato" checked={inputs.tomato || false} onChange={handleChange} />
            </label>
            <label>
                Onion:
                <input type="checkbox" name="onion" checked={inputs.onion || false} onChange={handleChange} />
            </label>
            <input type="submit" />
        </form>
    );
};

export default MyForm;