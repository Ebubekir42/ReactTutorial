const MissedGoal = () => {
    return <h1>MISSED!</h1>;
};

const MadeGoal = () => {
    return <h1>Goal!</h1>;
};

const Goal = (props) => {
    const isGoal = props.isGoal;
    // if (isGoal)
    //     return <MadeGoal />;
    // return <MissedGoal />;
    // return (
    //     <>
    //         {props.type && <h1>Type is {props.type}</h1>}
    //     </>
    // )
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
};

export default Goal;