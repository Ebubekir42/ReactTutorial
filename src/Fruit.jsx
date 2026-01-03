import { lazy, Suspense } from "react";

const fetchFruitData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['Apple', 'Banana', 'Cherry']);
        }, 2000);
    });
}

let fruitResource = {
    data: null,
    read() {
        if (this.data !== null) return this.data;
        throw fetchFruitData().then(result => this.data = result)
    }
};

const MyFruits = () => {
    const fruits = fruitResource.read();
    return (
        <>
            <h2>My Favorite Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    )
}

const Cars = lazy(() => import("./MyCar"));
const Header = lazy(() => import("./Header"));
const Sidebar = lazy(() => import("./Sidebar"));
const Content = lazy(() => import("./Content"));

const App3 = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {/* <MyFruits />
                <Car />
                <Cars/>   */}
                <Header />
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <Content />
                </div>
            </Suspense>
        </div>
    )
}

export default App3;