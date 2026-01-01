import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {name, age} from "./person.jsx"
import {name2, age2} from "./person.jsx";
import message from './message.jsx';


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


createRoot(document.getElementById('root')).render(
  // myelement
  // <MyList />
  // <UserList />
  // <MyList2/>
  <>
    <Greeting name={"John"} age={25} />
    <Greeting2 name={"John"} age={30} />
    <Counter />
    {message()}
  </>
  // <p>Welcome!</p>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
