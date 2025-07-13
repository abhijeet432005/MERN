import React from 'react'
import Create from './components/Create';
import Read from './components/Read';
import { useState } from 'react';

const App = () => {
  const [todos, settodos] = useState([]);

  return (
    <div className='w-full h-full flex justify-between bg-gray-700 text-white p-10'>
      <Create todos={todos} settodos={settodos}/>
      <div className='border'></div>
      <Read todos={todos} settodos={settodos}/>
    </div>
  )
}

export default App
