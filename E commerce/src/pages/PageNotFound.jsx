import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const PageNotFound = () => {
    const triggerRef = useRef(null);
    const textRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(textRef.current, {
            xPercent: -70,

            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: '+=800',
                scrub: true,
                pin: true
            }
        })
    }, [])
  return (
    <div ref={triggerRef} className=' w-full min-h-screen flex justify-center items-center overflow-hidden font-[font-1]'>
        <h1 ref={textRef} className=' text-[35vw] whitespace-nowrap ml-[200vw]'>Page Not Found</h1>
    </div>
  )
}

export default PageNotFound