import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipie from '../pages/Recipie'
import About from '../pages/About'
import Create from '../pages/Create'
import Recipe_Detailes from '../pages/Recipe_Detailes'
import Recipie_Update from '../pages/Recipie_Update'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipie' element={<Recipie />} ></Route>
        <Route path='/recipie/recipie-detail/:id' element={<Recipe_Detailes />}></Route>
        <Route path='/recipie/recipie-detail/update/:id' element={<Recipie_Update />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create />} />
    </Routes>
  )
}

export default MainRoutes
