import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import MessageSection from './sections/MessageSection'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <div className='h-dvh border border-red-500'></div>
    </div>
  )
}

export default App
