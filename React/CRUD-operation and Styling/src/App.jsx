import { nanoid } from 'nanoid';
import React from 'react'
import { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
  const [todos, setTodos] = useState([
    // {id: 1, title: "Kaam kro"}
  ]);

  
  
  // const [completed, setcompleted] = useState(false);
  // const [gender, setgender] = useState();

  

  return (
    <div className='w-full h-full bg-gray-800 p-10 flex text-white'>
      <Create todos={todos} setTodos={setTodos}/>
      <div className='border'></div>
      <Read todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
