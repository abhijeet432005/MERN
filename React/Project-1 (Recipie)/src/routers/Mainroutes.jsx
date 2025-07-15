import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipie from '../pages/Recipie'
import About from '../pages/About'
import Create_recipie from '../pages/Create_recipie'
import Recipie_details from '../pages/Recipie_details'
import Recipie_update from '../pages/Recipie_update'

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipie' element={<Recipie />}></Route>
        <Route path='/recipie/detail/:id' element={<Recipie_details />}></Route>
        <Route path='/recipie/detail/update/:id' element={<Recipie_update />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/create' element={<Create_recipie />}></Route>
      </Routes>
    </div>
  )
}

export default Mainroutes
