import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Mainroutes from './component/Mainroutes'


const App = () => {
  return (
    <div className='bg-gray-800 w-screen h-screen text-white overflow-hidden'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App
