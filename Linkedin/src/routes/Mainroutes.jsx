import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Jobs from '../pages/Jobs'
import UserDetail from '../pages/user/UserDetail'
import Post from '../components/Post/Post'
import PageNotFound from '../pages/PageNotFound'
import AuthRoutes from './AuthRoutes'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<AuthRoutes><Home /></AuthRoutes>}></Route>
            <Route path='/jobs' element={<Jobs />}></Route>
            <Route path='/userdetails' element={<UserDetail />}></Route>
            <Route path='/post' element={<Post />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes