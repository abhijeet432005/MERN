import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/actions/userAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigation = useNavigate();
  const BottomRef = useRef(null);
  const TopRef = useRef(null);
  const dispatch  = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(BottomRef.current, {
      yPercent: 100,
      duration: 1,
      autoAlpha: 0,
      ease: "power1.out"
    })
    tl.from(TopRef.current, {
      yPercent: -150,
      duration: 1,
      autoAlpha: 0,
      ease: "power1.out"
    }, '<')
  }, [])

  const SubmitHandler = (data) => {
    dispatch(getUser(data))
    toast.success("Logged in successfully 👋");
    navigation('/')
  } 
  return (
    <div className="w-full flex justify-center items-center min-h-screen overflow-hidden">
      <div className="fixed top-50 left-5">
        <p>username: carterb</p>
        <p>password: carterbpass</p>
      </div>
      <div className="flex gap-[3vw] w-[60vw] h-full p-5 md:p-0 justify-center items-center border border-gray-300/70 overflow-hidden">

        <div ref={TopRef} className="flex items-center flex-col w-full justify-center">
          <p className="font-[font-1]">Aapki Dukkan</p>
          <h1 className="font-[font-3] text-4xl tracking-wider text-center">Welcome Back</h1>

          <form onSubmit={handleSubmit(SubmitHandler)} className="flex flex-col gap-5 items-start mt-25">
            <div>
              <h1 className="leading-0 text-gray-400/70">Enter Name</h1>
              <input
                type="text"
                placeholder="User Name"
                className="outline-0 border w-[25vh] lg:w-[20vw] h-12 border-gray-300/50 p-2"
                {...register("userName")}
              />
            </div>

            <div>
              <p className="leading-0 text-gray-400/70">Password</p>
              <input
                type="password"
                placeholder="Password"
                className="outline-0 border w-[25vh] lg:w-[20vw] h-12 border-gray-300/50 p-2"
                {...register('password')}
              />
            </div>
            <button className="bg-black text-white px-3 py-2 border-none font-[font-1] tracking-wider">
              Login
            </button>
          </form>

        </div>

        <div ref={BottomRef} className="w-full hidden lg:flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3B8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
