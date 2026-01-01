const Car = (props) => {
    return (
        <h2>Hi, I am a {props.color} Car!</h2>
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

export default Garage;