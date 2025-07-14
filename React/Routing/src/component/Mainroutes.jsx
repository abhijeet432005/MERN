import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Services from './Services'
import About from './About'
import Product_details from './Product_details'
import Service_details from './Service_details'

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/details/:name' element={<Product_details />}></Route>
        <Route path='/service' element={<Services />}>
            <Route path='/service/details' element={<Service_details />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default Mainroutes
