import React from 'react'
import GradientSphere from '../components/GradientSphere'
import TitleHeader from '../components/TitleHeader'

const About = () => {
  return (
    <section id='about' className='flex-center relative md:p-0 px-5'>
        <GradientSphere sphere1Class={"about-gradient-sphere about-sphere-1"} sphere2Class={"about-gradient-sphere about-sphere-2"} />

        <div className='container w-full h-full md:my-40 my-20 relative z-10'>
            <TitleHeader title={"About Me"} text={"Relentless. Resilient. Revolutionary"} number={"01"}/>

            <div className="md:mt-20 mt-10">
                <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
                    <div className="md:col-span-7 col-span-12 row-span-5">
                        <div className='bg-black-300 rounded-2xl p-7 w-full'></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
