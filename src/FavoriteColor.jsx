import { useState } from "react";

const FavoriteColor = () => {
    const [color, setColor] = useState("red");
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    console.log("test");
    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <h1>My favorite color is {color}</h1>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setCar(prev => ({ ...prev, color: "gray" }))}>Change</button>
        </>
    )
}

export default FavoriteColor;