import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './component/Home'
import Product from './component/Product'
import Services from './component/Services'
import About from './component/About'

const App = () => {
  return (
    <div className='bg-gray-800 w-screen h-screen text-white overflow-hidden'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/service' element={<Services />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
