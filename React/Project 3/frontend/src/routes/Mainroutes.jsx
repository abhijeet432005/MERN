import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import About from '../pages/About'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetail from '../pages/admin/ProductDetail'
import UpdateProduct from '../pages/admin/UpdateProduct'
import UserProfile from '../pages/users/UserProfile'
import AuthRoutes from './AuthRoutes'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path="/product" element={<Products />}></Route>
            <Route path="/product/detail-product/:id" element={<ProductDetail />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/admin/create-product" element={<AuthRoutes><CreateProduct /></AuthRoutes>}></Route>
            <Route path="/admin/update-product/:id" element={<AuthRoutes><UpdateProduct /></AuthRoutes>}></Route>
            <Route path="/user/:id" element={<AuthRoutes><UserProfile /></AuthRoutes>}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes