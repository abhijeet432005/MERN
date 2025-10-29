import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signINAPI } from "../stores/actions/Useraction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SigninHandler = async () => {
    const success = await dispatch(signINAPI());
    if (success) navigate("/home");
  };

  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <div className="w-full flex flex-col justify-center items-center p-3">
      {/* Header */}
      <div className="w-[90%] max-w-6xl flex justify-between items-center">
        <NavLink to="/">
          <img className="w-32 sm:w-40" src="/logomain.webp" alt="Logo" />
        </NavLink>

        <div className="flex items-center gap-4 sm:gap-6">
          <h1 className="cursor-pointer text-gray-600 text-sm sm:text-base">
            Join now
          </h1>
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-500 text-blue-500 rounded-full text-sm sm:text-base">
            Sign in
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-full lg:flex-row mt-[11vh] sm:mt-[9vw] items-center">
        {/* Left section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-10 p-6 sm:p-10 text-center lg:ml-20 lg:text-left">
          <h1 className="text-blue-500 text-3xl sm:text-5xl lg:text-6xl font-thin leading-tight">
            Welcome to your <br /> professional community
          </h1>
          <div className="w-full flex justify-center">
            <button
              onClick={SigninHandler}
              className="flex items-center justify-center text-base sm:text-xl font-thin gap-2 w-[80%] sm:w-[60%] py-2 border rounded-full bg-white hover:bg-gray-100 transition"
            >
              <img src="/google.png" alt="Google" className="w-6 sm:w-9" />
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-[80%] sm:w-[60%] lg:w-full"
            src="/LoginPagePic.svg"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
