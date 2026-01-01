// const Car = (props) => {
//     const {brand, model} = props;
//     return (
//         <>
//             <h2>I am a {brand} {model}!</h2>
//             {/* <h2>I am a {props.color} {props.brand} {props.model}!</h2>
//             <h2>The car is from {props.year}!</h2>
//             <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
//             <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p> */}
//         </>
//     )
// }
const Car = ({ color = "blue", brand, ...rest }) => {
    return (
        <>
            <h2>My {brand} {rest.model} is {color}!</h2>
        </>
    )
}

const Garage = () => {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car color="red" />
            <Car color="blue" />
        </>
    )
}

export default Car;