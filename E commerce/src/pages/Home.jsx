import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Home = () => {



  const MostRead = [
    {
      title: "#Editorial",
      content: "Learn Something New today! best losers wins!",
      time: "5-min read",
      icon: "→",
    },
    {
      title: "#Editorial",
      content: "Some trends are lying! Take a look!",
      time: "7-min read",
      icon: "→",
    },
    {
      title: "#Editorial",
      content: "Enterprenure - 100 Powerfull women",
      time: "6-min read",
      icon: "→",
    },
  ];

  const categories = [
    {
      cat: 'Clothes Collection',
      img: '/category/cat-1.jpeg',
      path: 'womens-dresses'
    },
    {
      cat: 'Shoes Collection',
      img: '/category/cat-2.jpeg',
      path: 'womens-shoes'

    },
    {
      cat: 'Accessories Collection',
      img: '/category/cat-3.jpeg',
      path: 'womens-jewellery'

    }
  ]
  const navigate = useNavigate()

  const StoryRef = useRef(null);
  const HeroRef = useRef(null);
  const ParenHeroRef = useRef(null);
  const TextmoveRef = useRef(null);
  const LeftrotateImgRef = useRef([]);
  const RightrotateImgRef = useRef([]);
  const GalleryRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  gsap.config({ nullTargetWarn: false });
  ScrollTrigger.normalizeScroll(true);

  const addToRefs = (el) => {
    if (el && !LeftrotateImgRef.current.includes(el)) {
      LeftrotateImgRef.current.push(el);
    }
  };

  const addToRightRefs = (el) => {
    if (el && !RightrotateImgRef.current.includes(el)) {
      RightrotateImgRef.current.push(el)
    }
  }

  useGSAP(() => {
    const tl = gsap.timeline()
    const t2 = gsap.timeline()

    t2.from(ParenHeroRef.current, {
      scale: 1.2,
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 0.5
    }).from(".text-1", {
      y: 40,
      opacity: 0
    }).from(".text-2", {
      y: 40,
      opacity: 0
    })

    tl.to(HeroRef.current, {
      y: -200,
      scrollTrigger: {
        trigger: HeroRef.current,
        // markers: true,
        start: 'top 40%',
        scrub: true
      }
    })

    tl.to(TextmoveRef.current, {
      x: -1000,
      ease: "none",
      scrollTrigger: {
        trigger: StoryRef.current,
        start: 'top 10%',
        scrub: true,
        end: '+=750',
        // markers: true
      }
    })

    tl.to(LeftrotateImgRef.current, {
      x: -200,
      stagger: {
        amount: 0.01
      },
      rotate: '10deg',
      scrollTrigger: {
        trigger: StoryRef.current,
        // markers: true,
        start: 'bottom 30%',
        scrub: true
      }
    })


    tl.to(RightrotateImgRef.current, {
      x: 200,
      stagger: {
        amount: 0.01
      },
      rotate: '10deg',
      scrollTrigger: {
        trigger: StoryRef.current,
        // marker: true,
        start: 'bottom 30%',
        scrub: true
      }
    })


  }, [])

  // useEffect(() => {
  //   window.scrollTo(0,0)
  // }, [])

  return (
    <div className="w-full mt-5 md:pl-12 md:pr-12 md:pt-5 pt-3 pl-8 pr-8 font-[font-1]">
      <div className="w-full relative overflow-hidden">
        <div ref={ParenHeroRef} className="relative w-full h-[80vh] overflow-hidden">
          <img
            ref={HeroRef}
            src="/images/Hero (1).jpeg"
            alt="Hero Image"
            className="absolute top-0 left-0 w-full h-[120vh] object-cover will-change-transform"
            
          />
        </div>

        <div className="absolute bottom-15 left-8 text-white text-5xl font-[font-1] flex flex-col gap-4">

          <h1 className="text-1">Start Where Magic Happen.</h1>

          <button className="text-2 bg-white w-fit text-black px-4 py-2 text-sm">
            Shop Now
          </button>
        </div>
      </div>

      <div className="mt-30 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl lg:text-8xl md:text-6xl">
            Stunning Categories
          </h1>
        </div>
        <div className="w-full h-px bg-gray-200 mt-5"></div>

        <div className="flex w-full justify-between items-center flex-col md:flex-row">
          <h1 className="lg:w-[27vw] text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
            eligendi!
          </h1>
          <p className="lg:w-[35vw] text-sm mt-10 lg:mt-0">
            Lorem ipsum dolor sit amet consectetur. Dictum pharetra lectus
            sagittis vel. Morbi nullam hac vivamus rutrum aliquam amet facilisi
            feugiat. Ante semper egestas nulla tempor massa egestas sed
            vestibulum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-10">

          {
            categories.map((elem, index) => (

              <div onClick={() => navigate(`/category/${elem.path}`)} className={`w-full overflow-hidden  p-8 border group flex-col ${index == 1 && 'lg:border-x-0 border-x lg:border-y border-0'}`} key={index}>
                <div className="w-full h-[50vh] lg:h-[70vh] overflow-hidden">
                  <LazyLoadImage
                    src={`${elem.img}`}
                    alt=""
                    className={`w-full h-[50vh] lg:h-[70vh] group-hover:scale-105 transition-all duration-500`}
                  />
                </div>
                <h1 className="mt-4 text-2xl">{elem.cat}</h1>
                <p>
                  Shop{" "}
                  <span className="ml-1 group-hover:ml-3 transition-all duration-500">
                    →
                  </span>
                </p>
              </div>
            ))
          }
        </div>

        <div className="w-full h-full border bg-[#EEE3D3] flex flex-col justify-center items-center mt-10">
          <div className="w-full flex justify-between">
            <h1 className="mt-4 ml-4 lg:text-4xl text-xl lg:w-[25vw]">
              The wait is over, prelaunch soon
            </h1>
            <button className="bg-white text-black lg:px-6 lg:py-4 px-5 py-2 uppercase">
              <h1 className="text-3xl ">New</h1>
              <p className="text-[0.8rem]">Glasses</p>
            </button>
          </div>
          <LazyLoadImage src="/category/glasses.png" alt="image" className="w-1/2" />

          <div className="w-full flex justify-between items-end p-4">
            <h1 className="text-sm w-[15vw] hidden lg:block">
              Lorem ipsum dolor sit amet consectetur. Facilisis sed pulvinar.
            </h1>
            <button className="bg-transparent text-black flex px-3 border items-center gap-1">
              <h1 className="text-pretty border-r p-2 pl-0">shop</h1>
              <p className="text-[0.8rem]">→</p>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-30">
        <h1 className="text-[15vw] md:text-5xl lg:text-6xl  md:text-center ">
          Our most read stories
        </h1>

        <div className="flex flex-col gap-5 mt-35">
          {MostRead.map((item, index) => (
            <div key={index}>
              <div className="w-full flex justify-between items-start flex-col lg:flex-row gap-8">
                <div className="">
                  <p>{item.title}</p>
                </div>

                <div className="w-full lg:w-[40vw] flex justify-center">
                  <h1 className="text-3xl lg:w-[20vw] capitalize">
                    {item.content}
                  </h1>
                </div>

                <div className="flex justify-between w-full lg:w-fit lg:gap-[10vw]">
                  <p>{item.time}</p>

                  <p>{item.icon}</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-500 mt-10"></div>
            </div>
          ))}
        </div>

        <div ref={StoryRef} className="w-full bg-[#2964C7]  text-white mt-30">
          <div className="mt-20 p-5 lg:p-10 lg:pt-20">
            <div className="w-full bg-white h-px "></div>
            <p className="uppercase mt-2 text-pretty">Our Story</p>
          </div>

          <div className="text-center w-full flex  justify-center items-center relative overflow-hidden p-5 lg:p-10">

            <div ref={TextmoveRef} className="absolute top-0 ml-[250vw] lg:ml-[120vw]">
              <h1 className="text-[20vw] lg:text-[15vw] whitespace-nowrap ">Fashion / magnett</h1>
            </div>

            <div className="lg:w-[30vw] lg:h-[80vh]">
              <LazyLoadImage
                src="/category/OurStory.png"
                alt="image"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-[20vw] whitespace-nowrap lg:text-[13.5vw] left-0 lg:right-2/5 lg:bottom-10 top-1/2 absolute">
              for you
            </h1>
          </div>

          <div className="w-full  mt-15 flex justify-between items-center mb-20 p-5 lg:p-10 lg:pb-20">
            <div className="w-[33%] hidden lg:block"></div>

            <div className="w-full lg:w-[calc(100%-33%)] flex flex-col">

              <div className="flex justify-between lg:items-end items-start w-full flex-col md:flex-row">
                <p className="text-[10vw] w-full lg:text-5xl lg:w-[35vw] text-start">
                  Discover who was behind the Sartorialist idea
                </p>

                <button className="flex items-center gap-1 bg-white text-black px-3 mt-5 lg:mt-0">
                  <h1 className="border-r p-3 pl-0">Learn more about</h1>
                  <p className="ml-1">→</p>
                </button>
              </div>
              <div className="w-full h-px bg-white mt-15 " />

            </div>
          </div>

        </div>

        <div ref={GalleryRef} className="w-full flex justify-center  mt-45 mb-30">
          <div className="relative w-1/3 hidden lg:block">
            <div ref={addToRefs} className="absolute -top-15 left-80 w-[6vw] h-[12vh] -rotate-45">
              <LazyLoadImage alt="image" src="/category/gallery-1.jpeg" className="w-full h-full object-cover" />
            </div>

            <div ref={addToRefs} className="absolute top-10 left-20 w-[20vw] h-[35vh] rotate-15 z-9">
              <LazyLoadImage alt="image" src="/category/gallery-2.jpeg" className="w-full h-full object-cover" />
            </div>

            <div ref={addToRefs} className="absolute top-15 left-80 w-[8vw] h-[15vh] rotate-10 z-10">
              <LazyLoadImage alt="image" src="/category/OurStory.png" className="w-full h-full object-cover" />
            </div>

            <div ref={addToRefs} className="absolute bottom-0 left-70 w-[8vw] h-[15vh] -rotate-35 z-8">
              <LazyLoadImage alt="image" src="/category/gallery-3.jpeg" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h1 className="text-5xl lg:w-[35vw]">Get inspired by the worlds most influent fashion artist</h1>
            <p className="text-pretty lg:w-[25vw] mt-15">Lorem ipsum dolor sit amet consectetur. Mattis tincidunt consectetur ut mauris ipsum at dolor mi. Nec scelerisque.</p>

            <button className="mt-15 px-3 py-2 border rounded-md hover:text-gray-500/60 hover:text-gray-500/60 transition-all duration-500">Explore Gallery</button>
          </div>

          <div className="relative w-1/3 hidden lg:block">
            <div ref={addToRightRefs} className="absolute -top-15 right-80 w-[6vw] h-[12vh] -rotate-45 z-10">
              <LazyLoadImage src="/category/gallery-4.jpeg" alt="image" className="w-full h-full object-cover" />
            </div>
            <div ref={addToRightRefs} className="absolute top-10 right-20 w-[20vw] h-[35vh] rotate-10">
              <LazyLoadImage src="/category/gallery-5.jpeg" alt="image" className="w-full h-full object-cover " />
            </div>
            <div ref={addToRightRefs} className="absolute bottom-0 right-95 w-[8vw] h-[15vh] -rotate-35 z-8">
              <LazyLoadImage src="/category/gallery-7.jpeg" alt="image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
