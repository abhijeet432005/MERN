import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import VideoDetails from '../components/Video/VideoDetails'
const Home = lazy(() => import('../pages/Home'))
import Feed from "../components/Feed/Feed"

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}>
            </Route>
              {/* <Route index element={<Feed/>}></Route> */}
              <Route path='/watch' element={<VideoDetails />}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes