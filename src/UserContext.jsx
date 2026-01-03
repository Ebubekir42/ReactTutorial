import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const Component1 = () => {
    const [user, setUser] = useState("Linus");
    return (
        <>
            <UserContext.Provider value={user}>
                <h1>Hello {user}!</h1>
                <Component2 />
            </UserContext.Provider>
        </>
    );
}

const Component2 = () => {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

const Component3 = () => {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 3</h1>
            <h2>Hello {user} again!</h2>
        </>
    );
}

export default Component1;