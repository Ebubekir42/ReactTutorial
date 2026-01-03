import { forwardRef, StrictMode, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {name, age} from "./person.jsx"
import { name2, age2 } from "./person.jsx";
import message from './message.jsx';
import Car from './Car.jsx';
import Parent from './Parent.jsx';
import Goal from './Goal.jsx';
import MyCar from './MyCar.jsx';
import MyForm from './Form.jsx';
import MyApp from './Modal.jsx';
import App2 from './PortalButton.jsx';
import App3 from './Fruit.jsx';
import { PrimaryButton, SuccessButton, GlobalStyle, Button } from './Button.jsx';
import { BrowserRouter, Link, Navigate, NavLink, Outlet, Route, Routes, useParams } from 'react-router-dom';


const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
)

// ES6 - Array Map()
const fruitList = ['apple', 'banana', 'cherry'];
const MyList = () => {
  return (
    <ul>
      {fruitList.map(fruit =>
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  )
}
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];
const UserList = () => (
  <ul>
    {users.map(user =>
      <li key={user.id}>{user.name} is {user.age} years old</li>
    )}
  </ul>
)
const MyList2 = () => (
  <ul>
    {fruitList.map((fruit, index, array) =>
      <li key={index}>Number: {fruit}, Index: {index}, Array: {array}</li>
    )}
  </ul>
)

// ES6 - Destructing
// using destructing
const Greeting = ({ name, age }) => <h1>Hello, {name}! You are {age} years old.</h1>;
// not using destructing
const Greeting2 = (props) => <h1>Hello, {props.name}! You are {props.age} years old.</h1>;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}

// Command
/*
Commands
*/
const myelement2 = <h1>Hello {/* fruitList.join(", ")*/}</h1>;

// Component
// const Car = () => {
//   const brand = "Ford";
//   const model = "Mustang";
//   const hp = 218 * 1.36;
//   const myobj = {
//     name: "Fiat",
//     model: "500",
//     color: "white"
//   };
//   const x = "myClass2";
//   const myStyle = {
//     color: "red",
//     fontSize: "20px",
//     backgroundColor: "#ddd"
//   };
//   // camelCase Event Attributes
//   // React supports if statements, but not inside JSX.
//   let y = 15;
//   let color = "Gray";
//   if (y < 10)
//     color = "White";
//   return (
//     <>
//       <h2 onClick={() => { alert("Hello World") }} className={`myClass ${x}`}>My Car</h2>
//       <p>It is a {brand} {model}</p>
//       <p>It has {218 * 1.36} horsepower</p>
//       <p>It has {hp} horsepower</p>
//       <p>It has {kwtohp(218)} horsepower</p>
//       <p>My car is a {myobj.color} {myobj.name} {myobj.model}</p>
//       {/* Boolen Attributes */}
//       <button onClick={() => { alert("Hello World") }} disabled>Click Me</button>
//       <button onClick={() => { alert("Hello World") }} disabled={true}>Click Me</button>
//       <button onClick={() => { alert("Hello World") }} disabled={false}>Click Me</button>
//       {/* Style Attributes camelCase */}
//       <p style={{ color: "red", fontSize: "20px", backgroundColor: "lightgrey" }}>Stil 1</p>
//       <p style={myStyle}>Stil 2</p>
//       <p>{color}</p>
//       <p>{y < 10 ? "Gray" : "White"}</p>
//     </>
//   );
// };

const kwtohp = (kw) => kw * 1.36;
let x = "Ford"
let y = { name: "Ford", model: "Mustang" };
let z = [1964, 1965, 1966];

const shoot = (a, b) => {
  alert(a);
  alert(b.type);
}

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/car">Cars</Link> |{" "}
        <Link to="/products/bike">Bikes</Link>
      </nav>
      <Outlet />
    </div>
  );
}

const CarProducts = () => {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

const BikeProducts = () => {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px"
});

const Info = () => {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

const App4 = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  // myelement
  // <MyList />
  // <UserList />
  // <MyList2/>
  // <>
  //   <Greeting name={"John"} age={25} />
  //   <Greeting2 name={"John"} age={30} />
  //   <Counter />
  //   {message()}
  // </>
  // <p>Welcome!</p>
  // <Car brand={x} model="Mustang" year={1969} years={z} carinfo={y} />
  // <Parent />
  // <button onClick={event => shoot("Goal!", event)}>Take the shoot!</button>
  // <Goal isGoal={true} type="football" />
  // <MyCar />
  // <MyForm />
  // <MyApp />
  // <App2 />
  // <>
  //   <App3 />
  //   <div className='primary'>Div Elements</div>
  // </>
  // <>
  //   <Button btntype="primary">Primary Button</Button>
  //   <Button btntype="secondary">Secondary Button</Button>
  // </>
  // <>
  //   <Button $btntype="primary">Primary Button</Button>
  //   <Button $btntype="secondary">Secondary Button</Button>
  //   <PrimaryButton>Primary Button</PrimaryButton>
  //   <SuccessButton>Success Button</SuccessButton>
  //   <GlobalStyle />
  //   <h1>Welcome!</h1>
  //   <p className='myparagraph'>This paragraph is styled with global styles.</p>
  // </>
  // <BrowserRouter>
  //   <nav>
  //     {/* <Link to="/">Home</Link> |{" "}
  //     <Link to="/about">About</Link> |{" "}
  //     <Link to="/products">Products</Link> |{" "}
  //     <Link to="/contact">Contact</Link> */}
  //     <NavLink style={navLinkStyles} to="/">Home</NavLink> |{" "}
  //     <NavLink style={navLinkStyles} to="/about">About</NavLink> |{" "}
  //     <NavLink style={navLinkStyles} to="/products">Products</NavLink> |{" "}
  //     <NavLink style={navLinkStyles} to="/customer/Emil">Emil</NavLink> |{" "}
  //     <NavLink style={navLinkStyles} to="/customer/Tobias">Tobias</NavLink> |{" "}
  //     <NavLink style={navLinkStyles} to="/customer/Linus">Linus</NavLink> |{" "}
  //     <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
  //   </nav>

  //   <Routes>
  //     <Route path='/' element={<Home />} />
  //     <Route path='/about' element={<About />} />
  //     <Route path='/products' element={<Products />}>
  //       <Route path='car' element={<CarProducts />} />
  //       <Route path='bike' element={<BikeProducts />} />
  //     </Route>
  //     <Route path='/contact' element={<Contact />} />
  //     <Route path='/customer/:firstname' element={<Info />} />
  //     <Route path='/customer' element={<Navigate to={"/customer/Emil"} />} />
  //   </Routes>
  // </BrowserRouter>
  <App4 />
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
