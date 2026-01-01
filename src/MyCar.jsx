import { useEffect, useState } from "react";

const MyCar = () => {
    const cars = [
        { id: 1001, brand: 'Ford' },
        { id: 1002, brand: 'Audi' },
        { id: 1003, brand: 'BMW' }
    ];

    return (
        <>
            <h1>My Cars:</h1>
            {/* <ul>
                {cars.map(car => <li key={car.id}>I am a {car.brand}</li>)}
            </ul> */}
            <ul>
                {cars.map((car, index) => <li key={index}>I am a {car.brand}</li>)}
            </ul>
            {
                /*
                The list is static (won't change)
                The list will never be reordered or filtered
                The items in the list have no IDs
                */
            }
        </>
    );
}

export default MyCar;