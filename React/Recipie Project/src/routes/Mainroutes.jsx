import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import CreateRecipie from '../pages/CreateRecipie'
import RecipieDetails from '../pages/RecipieDetails'
import RecipieUpdates from '../pages/RecipieUpdates'
import PageNotFound from '../pages/PageNotFound'
import Fav from '../pages/Fav'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/recipies' element={<Recipies />}/>
            <Route path='/recipies/details/:id' element={<RecipieDetails />}/>
            <Route path='/recipies/details/updates/:id' element={<RecipieUpdates />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/favourite' element={<Fav />}/>
            <Route path='/createRecipie' element={<CreateRecipie />}/>
            <Route path='*' element={<PageNotFound />}/>
        </Routes>
    </div>
  )
}

export default Mainroutes