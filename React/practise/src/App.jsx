import React from 'react'
import { useState } from 'react';
import Background from './component/Background';
import Visible from './component/Visible'

const App = () => {

  


  return (

    <div className='w-full h-full flex'>
      <div className='w-[50%]'>
        <Background />

      </div>

      <div className='border text-white'></div>

      <div className='w-[50%]'>
        <Visible/>
      </div>
    </div>

    


  )
}

export default App
