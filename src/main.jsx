import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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


createRoot(document.getElementById('root')).render(
  // myelement
  // <MyList />
  // <UserList />
  <MyList2/>
  // <p>Welcome!</p>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
