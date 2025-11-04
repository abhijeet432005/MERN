import React, { useContext, useState } from "react";

import {
  BiHome,
  BiHistory,
  BiLike,
  BiMusic,
  BiNews,
  BiTrendingUp,
  BiGame,
  BiCollection,
  BiMovie,
  BiTime,
  BiFlag,
  BiHelpCircle,
  BiMessageError,
  BiDownload,
} from "react-icons/bi";

import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineOndemandVideo,
  MdOutlineExplore,
  MdOutlineFeedback,
  MdOutlineSettings,
} from "react-icons/md";

import { FaUser } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { myContext } from "../../context/Contextprovider";

const SideNav = ({side}) => {
    // const {side} = useContext(myContext)
  const sections = [
    {
      title: null,
      items: [
        { icon: <BiHome />, name: "Home" },
        { icon: <FaPlay />, name: "Shorts" },
        { icon: <MdOutlineSubscriptions />, name: "Subscriptions" },
      ],
    },
    {
      title: null,
      items: [
        { icon: <MdOutlineVideoLibrary />, name: "Library" },
        { icon: <BiHistory />, name: "History" },
        { icon: <MdOutlineOndemandVideo />, name: "Your Videos" },
        { icon: <BiTime />, name: "Watch Later" },
        { icon: <BiLike />, name: "Liked Videos" },
        { icon: <BiDownload />, name: "Downloads" },
      ],
    },
    {
      title: "Subscriptions",
      items: [
        { icon: <FaUser />, name: "T-Series" },
        { icon: <FaUser />, name: "Taarak Mehta Ka Ooltah Chashmah" },
        { icon: <FaUser />, name: "Chai aur Code" },
        { icon: <FaUser />, name: "Sheriyans Coding School" },
        { icon: <FaUser />, name: "6 Pack Coder" },
        { icon: <FaUser />, name: "Sarthak Sharma" },
      ],
    },
    {
      title: "Explore",
      items: [
        { icon: <BiTrendingUp />, name: "Trending" },
        { icon: <BiMusic />, name: "Music" },
        { icon: <BiMovie />, name: "Movies" },
        { icon: <BiNews />, name: "News" },
        { icon: <BiGame />, name: "Gaming" },
        { icon: <MdOutlineExplore />, name: "Podcasts" },
        { icon: <BiCollection />, name: "Courses" },
      ],
    },
    {
      title: "More From YouTube",
      items: [
        { icon: <BiTrendingUp />, name: "YouTube Premium" },
        { icon: <MdOutlineOndemandVideo />, name: "YouTube Studio" },
        { icon: <BiMusic />, name: "YouTube Music" },
        { icon: <BiMovie />, name: "YouTube Kids" },
      ],
    },
    {
      title: null,
      items: [
        { icon: <MdOutlineSettings />, name: "Settings" },
        { icon: <BiFlag />, name: "Report History" },
        { icon: <BiHelpCircle />, name: "Help" },
        { icon: <MdOutlineFeedback />, name: "Send Feedback" },
      ],
    },
  ];

  const sidebar = [
    { icon: <HiHome />, name: "Home" },
    { icon: <FaPlay />, name: "Shorts" },
    { icon: <MdOutlineSubscriptions />, name: "Subscriptions" },
    { icon: <BiDownload />, name: "Downloads" },
  ];

  return (
    <>
      {side ? (
        <>
          <div
            className={`pl-6 w-[15vw] bg-white z-99 h-[calc(100vh-4rem)] border-r border-gray-200  overflow-y-auto scroll-smooth sticky top-[4rem] mt-15 `}
          >
            {sections.map((elem, id) => (
              <div className="mb-4 border-b border-gray-200 pb-2" key={id}>
                {elem.title && (
                  <div>
                    <h2 className="text-xl font-thin">{elem.title}</h2>
                  </div>
                )}

                {elem.items.map((val, id) => (
                  <div
                    className="flex items-center gap-3 rounded-lg whitespace-nowrap cursor-pointer hover:bg-gray-100 px-2 py-2"
                    key={id}
                  >
                    <h1 className="text-[1.5rem]">{val.icon}</h1>
                    <h1 className="w-35 line-clamp-1">{val.name}</h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          
        </>
      )}
    </>
  );
};

export default SideNav;
