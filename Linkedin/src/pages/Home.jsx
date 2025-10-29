import React from 'react'
import Navbar from '../components/Navbar'
import HomeContent from '../components/Home/HomeContent'

const Home = () => {

  return (
    <div className='w-full bg-gray-100 h-screen'>
        <Navbar />
        <HomeContent />

    </div>
  )
}

export default Home