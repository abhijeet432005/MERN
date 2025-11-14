import React, { useContext, useState } from "react";
import { myContext } from "../../context/Contextprovider";
import { isAction } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncGetByCat } from "../../store/actions/vidoeAction";
import { loadByCatogery } from "../../store/reducer/VideoSlice";

const Button = () => {
  const { open } = useContext(myContext);
  const dispatch = useDispatch()
  // console.log(open)
  const buttons = [
    "All",
    "Poadcast",
    "React Router",
    "JavaScript",
    "Data Structure",
    "AI",
    "TMKOC",
    "Mutual Funds",
    "Recently Uploads",
    "Trending",
    "Movies",
    "Disha Vakani",
    "Live"
  ];
  const [position, setposition] = useState(0);
  const [activeButton, setactiveButton] = useState("All");
  // console.log(position)

  const HandelNext = () => {
    position >= 15 ? "" : setposition((prev) => prev + 15);
  };
  const HandelPrev = () => {
    position <= 0 ? "" : setposition((prev) => prev - 15);
  };

  const ButtonHandler = (elem) => {
    setactiveButton(elem)
    dispatch(loadByCatogery(elem))
  };

  return (
    <div className="w-full fixed top-[4rem] h-15 bg-white flex items-center overflow-auto md:overflow-hidden lg:overflow-hidden ">
      <div className="w-[85vw] relative px-2">
        <div
          className={`mr-4 bg-white w-9 h-10 absolute top-0 left-0 pt-1 z-2 ${
            open == true ? "" : "hidden"
          }`}
          onClick={HandelPrev}
        >
          <i
            className={`ri-arrow-left-s-line text-2xl px-1 py-1 rounded-full ${
              position <= 0 ? "text-gray-300" : "text-black"
            }`}
          ></i>
        </div>

        <div
          className={`flex gap-3  duration-1000 w-[85vw] ${
            open == true ? "pl-9" : "pl-1"
          }`}
          style={{ transform: `translateX(-${position}%)` }}
        >
          {buttons.map((elem, id) => (
            <button
              onClick={() => ButtonHandler(elem)}
              key={id}
              className={`${
                activeButton === elem
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } px-3 py-1.5 text-[0.8rem] lg:text-[1rem] rounded-full whitespace-nowrap transition-all`}
            >
              {elem}
            </button>
          ))}
        </div>

        <div
          className={`bg-white w-10 h-10 absolute top-0 right-0 pt-1 z-2 ${
            open == true ? "" : "hidden"
          }`}
          onClick={HandelNext}
        >
          <i
            className={`ri-arrow-right-s-line text-2xl px-1 py-1 rounded-full  ${
              position >= 7 ? "text-gray-300" : "text-black"
            }`}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Button;
