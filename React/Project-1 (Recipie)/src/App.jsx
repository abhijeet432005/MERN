import React from 'react'
import Mainroutes  from "./routers/Mainroutes";
import Nav from "./Component/Nav.jsx"

const App = () => {
  return (
    <div className='bg-gray-800 w-full h-full text-white'>
      
      <Nav />
      <Mainroutes />
    
    </div>
  )
}

export default App
