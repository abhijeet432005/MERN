import React from "react";
import Homeleft from "./Homeleft";
import HomeMain from "./HomeMain";
import HomeRight from "./HomeRight";
import { BsInfoSquareFill } from "react-icons/bs";


const HomeContent = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100">
      <div className="container lg:w-[80%]  w-full lg:mt-[9vw] md:mt-[8vw] sm:mt-[6vw]">
        {/* left  */}
        <Homeleft />

        {/* main  */}
        <HomeMain />

        {/* right */}
        <HomeRight />
      </div>
    </div>
  );
};

export default HomeContent;
