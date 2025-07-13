import React, { useState } from 'react';
import Create from "./component/create";
import Read from "./component/Read";


const App = () => {
  // 2-way Binding --> only apply on forms
  const [users, setUsers] = useState([
    { name: "Carry", age: 20 },
    { name: "Jhon", age: 12 }
  ])

  return (
    <div>
      <Create />
      <hr />
      <Read users={users} setUsers={setUsers} />
    </div>
  )
}

export default App
