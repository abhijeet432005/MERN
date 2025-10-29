import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { BsBagFill } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { useSelector } from "react-redux";
import UserDetail from "../pages/user/UserDetail";
import Post from "./Post/Post";

const Navbar = () => {
  const userData = useSelector((state) => state.user.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const menuRef = useRef(null);

  const closePostHandler = () => setPostModal(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (elem) => {
    if (elem.action === "openPostModal") {
      setPostModal(true);
    }
  };

  const navmenu = [
    { icon: <IoHome />, name: "Home", path: "home" },
    { icon: <IoMdPeople />, name: "Network", path: "network" },
    { icon: <FaSquarePlus />, name: "Post", action: "openPostModal" },
    { icon: <IoIosNotifications />, name: "Notification", path: "notification" },
    { icon: <BsBagFill />, name: "Jobs", path: "jobs" },
  ];

  const Desknavmenu = [
    { icon: <IoHome className="text-2xl" />, name: "Home" },
    { icon: <IoMdPeople className="text-2xl" />, name: "Network" },
    { icon: <IoIosNotifications className="text-2xl" />, name: "Notification" },
    { icon: <BsBagFill className="text-2xl" />, name: "Jobs" },
  ];

  const render = navmenu.map((elem, id) => (
    <div className="flex" key={id}>
      {elem.path ? (
        <NavLink
          to={`/${elem.path}`}
          className={({ isActive }) =>
            `flex flex-col justify-center items-center ${
              isActive ? "text-black" : "text-gray-500"
            }`
          }
        >
          <div>{elem.icon}</div>
          <div className="text-sm">{elem.name}</div>
        </NavLink>
      ) : (
        <div
          onClick={() => handleMenuClick(elem)}
          className="flex flex-col justify-center items-center text-gray-500 cursor-pointer hover:text-black"
        >
          <div>{elem.icon}</div>
          <div className="text-sm">{elem.name}</div>
        </div>
      )}
    </div>
  ));

  const Deskrender = Desknavmenu.map((elem, id) => (
    <div className="flex" key={id}>
      <NavLink
        to={`/${elem.name.toLowerCase()}`}
        className={({ isActive }) =>
          `flex flex-col justify-center items-center ${
            isActive ? "text-black" : "text-gray-500"
          }`
        }
      >
        <div>{elem.icon}</div>
        <div className="text-sm">{elem.name}</div>
      </NavLink>
    </div>
  ));

  return (
    <div className="w-full bg-white sm:fixed sm:top-0 sm:left-0 z-50 shadow-sm">
      <div className="flex w-full p-2 items-center justify-center lg:justify-between sm:w-[80%] mx-auto sm:pt-2">
        {/* Left Section */}
        <div className="flex items-center justify-center gap-4 w-fit">
          {userData ? (
            <div className="relative lg:hidden" ref={menuRef}>
              <div
                className="cursor-pointer flex flex-col items-center"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img
                  src={userData?.photo}
                  alt="user"
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 border rounded-full bg-blue-300"
                />
              </div>
              {menuOpen && <UserDetail userData={userData} />}
            </div>
          ) : (
            <img
              src="/linkedin.png"
              alt="logo"
              className="w-8 sm:w-10 lg:hidden"
            />
          )}

          <img
            src="/linkedin.png"
            alt="logo"
            className="w-8 sm:w-10 hidden lg:flex"
          />

          {/* Search */}
          <div className="relative sm:flex items-center">
            <CiSearch className="absolute left-3 top-3 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 w-[15rem] border rounded-full bg-white border-gray-400 outline-none transition"
            />
          </div>

          {userData && <TbMessage2 className="text-3xl lg:hidden" />}
        </div>

        {/* Desktop Menu */}
        {userData ? (
          <div className="lg:flex gap-5 hidden items-center">
            <div className="hidden lg:flex gap-[3vw]">{Deskrender}</div>

            {/* Profile */}
            <div className="relative pl-4" ref={menuRef}>
              <div
                className="cursor-pointer flex flex-col items-center mt-1"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img
                  src={userData?.photo}
                  alt="user"
                  referrerPolicy="no-referrer"
                  className="h-6 w-6 border rounded-full bg-blue-300"
                />
                <h1 className="flex items-center text-sm -mt-1">
                  Me <MdArrowDropDown className="text-2xl" />
                </h1>
              </div>
              {menuOpen && <UserDetail userData={userData} />}
            </div>

            <div className="w-[2px] h-14 bg-black"></div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <h1 className="flex items-center text-sm">
                Work <MdArrowDropDown className="text-2xl" />
              </h1>
            </div>
          </div>
        ) : (
          <button className="p-2 px-3 border-blue-600 rounded-full border hidden lg:flex">
            Sign in
          </button>
        )}
      </div>

      {/* Bottom Nav for Mobile */}
      <div className="fixed w-full bottom-0 left-0 lg:hidden flex gap-3 justify-evenly items-center border-t border-gray-400 p-2 bg-white">
        {render}
      </div>

      {/* Post Modal */}
      {postModal && <Post closeHandler={closePostHandler} />}
    </div>
  );
};

export default Navbar;