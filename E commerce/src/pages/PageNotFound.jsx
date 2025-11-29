import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const PageNotFound = () => {
    const triggerRef = useRef(null);
    const textRef = useRef(null);
    const imgRefs = useRef([]);

  const addToRefs = (el) => {
    if(el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el)
    }
  }
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: '+=800',
                scrub: 0.15,
                pin: true
            }
        });

        tl.to(textRef.current, {
            xPercent: -70
        })
        tl.to(imgRefs.current, {
            xPercent: -500,
            rotate: -10,
            ease: 'none'
        }, '<')
    }, [])

  return (
    <div ref={triggerRef} className=' w-full min-h-screen flex justify-center items-center overflow-hidden font-[font-1] relative'>
        
        <img ref={addToRefs} src="/category/gallery-1.jpeg" className="w-32 h-44 absolute top-[15%]  hidden lg:block left-[5%]" />
        <img ref={addToRefs} src="/category/gallery-2.jpeg" className="w-36 h-48 absolute top-[50%]  hidden lg:block left-[3%]" />
        <img ref={addToRefs} src="/category/gallery-3.jpeg" className="w-28 h-40 absolute top-[30%]  hidden lg:block -right-[10%]" />
        <img ref={addToRefs} src="/category/gallery-4.jpeg" className="w-44 h-60 absolute top-[30%]  hidden lg:block right-[30%]" />
        <img ref={addToRefs} src="/category/gallery-5.jpeg" className="w-28 h-40 absolute top-[30%]  hidden lg:block right-[70%]" />
        <img ref={addToRefs} src="/category/OurStory.png" className="w-40 h-52 absolute bottom-[10%] hidden lg:block  -right-[3%]" />
        <h1 ref={textRef} className=' text-[35vw] whitespace-nowrap ml-[200vw]'>Page Not Found</h1>
    </div>
  )
}

export default PageNotFound