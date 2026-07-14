import React from 'react'
import { useState } from 'react';
import Background from './component/Background';
import Visible from './component/Visible'
import HoverImage from './component/HoverImage';
import From from './component/From';
import Recipe from './component/Recipie/Recipe';

const App = () => {

  


  return (

    <div className='w-full h-full flex p-6'>
      {/* <div className='w-[50%]'>
        <Background />

      </div>

      <div className='border text-white'></div>

      <div className='w-[50%]'>
        <Visible/>
      </div> */}

        {/* <From /> */}
        <Recipe />
    </div>

    


  )
}

export default App
