import React from 'react'
import Create from './components/Create';
import Read from './components/Read';
import { useState } from 'react';

const App = () => {
  

  return (
    <div className='w-full h-full flex justify-between bg-gray-700 text-white p-10'>
      <Create />
      <div className='border'></div>
      <Read />
    </div>
  )
}

export default App
