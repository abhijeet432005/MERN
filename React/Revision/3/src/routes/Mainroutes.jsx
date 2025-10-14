import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Components/Home"
import About from "../Components/About"
import Product from "../Components/Product"
import Services from "../Components/Services"
import ProductDetails from '../Components/ProductDetails'
import ServiceDetails from '../Components/ServiceDetails'

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/Details/:name' element={<ProductDetails />}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} >
          <Route path='/services/detail' element={<ServiceDetails />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Mainroutes