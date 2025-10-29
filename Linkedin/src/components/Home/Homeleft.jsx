import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";

const Homeleft = () => {
  const userData = useSelector(state => state.user.user)
  return (
    <div className="sticky top-35 h-fit">
      <div className="left min-w-full flex flex-col gap-4">
        {/* top */}
        <div className="w-full flex flex-col gap-[3rem] bg-white border border-gray-300 rounded-xl overflow-hidden">
          <div className="w-full relative">
            <img
              className="w-full h-[5vw]"
              src="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900"
              alt=""
            />
            <img src={`${userData?.photo}`} className="absolute bg-white w-20 h-20 rounded-full -bottom-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
            {/* <FaUser className="absolute bg-white w-20 h-20 rounded-full -bottom-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1>Welcome, Abhijeet kumar</h1>
              <p>Add a photo</p>
            </div>

            <div className="flex justify-between items-center border-t border-gray-300 w-full p-3 mt-6">
              <div className="">
                <p className="text-gray-400">Connections</p>
                <h1>Grow your network</h1>
              </div>

              <IoMdPeople />
            </div>

            <div className="flex items-center justify-start w-full p-3 border-t border-gray-300">
              <FaBookmark />
              <h1>My items</h1>
            </div>
          </div>
        </div>

        {/* bottom */}

        <div className="flex flex-col bg-white border border-gray-300 rounded-xl overflow-hidden w-full  ">
          <div className="flex flex-col p-2 gap-3 w-full font-bold">
            Groups
            <div className="flex w-full justify-between">
              Events <p>+</p>
            </div>
            Followers Hashtags
          </div>
          <div className="font-thin text-xl text-gray-400 border-t border-gray-300 p-2 ">
            Discover more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeleft;
