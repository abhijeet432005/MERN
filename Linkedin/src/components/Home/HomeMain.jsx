import React, { useState } from "react";
import { TbPhotoSquareRounded } from "react-icons/tb";
import {
  MdOutlineVideoLibrary,
  MdEventNote,
  MdOutlineArticle,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import Post from "../Post/Post";

const HomeMain = () => {
  const userData = useSelector((state) => state.user.user);
  const postData = JSON.parse(localStorage.getItem("Post")) || [];
  console.log(userData)
  const [PostModel, setPostModel] = useState(false);

  const closeHandler = () => {
    setPostModel(!PostModel);
  };

  const LikeSection = [
    { icon: <BiLike />, name: "Like" },
    { icon: <FaRegCommentDots />, name: "Comments" },
    { icon: <BiRepost />, name: "Repost" },
    { icon: <IoIosSend />, name: "Send" },
  ];

  const LikeRender = LikeSection.map((elem, id) => (
    <div
      key={id}
      className="flex items-center gap-1 text-blue-400 cursor-pointer"
    >
      {elem.icon}
      <span>{elem.name}</span>
    </div>
  ));

  const Main = [
    { icon: <TbPhotoSquareRounded className="text-blue-500" />, name: "Photo" },
    {
      icon: <MdOutlineVideoLibrary className="text-green-500" />,
      name: "Video",
    },
    { icon: <MdEventNote className="text-orange-500" />, name: "Event" },
    {
      icon: <MdOutlineArticle className="text-orange-500" />,
      name: "Write Article",
    },
  ];

  const render = Main.map((elem, id) => (
    <div key={id} className="flex items-center text-xl gap-1 cursor-pointer">
      <div className="text-2xl">{elem.icon}</div>
      <div className="text-blue-500">{elem.name}</div>
    </div>
  ));

  return (
    <div className="main w-full flex flex-col gap-4 mb-10">
      {/* top */}
      <div className="w-full p-5 lg:flex flex-col bg-white rounded-2xl hidden">
        <div className="flex w-full items-center gap-4">
          <img
            src={userData?.photo}
            alt="user"
            referrerPolicy="no-referrer"
            className="border w-10 h-10 text-5xl rounded-full"
          />

          <div className="w-full relative">
            <div
              onClick={() => setPostModel(true)}
              className="w-full border px-2 py-3 rounded-full border-gray-400 hover:bg-gray-100 text-gray-400 cursor-pointer"
            >
              <span className="ml-6">Post Here</span>
              <BiSearch className="absolute top-1/2 left-5 -translate-y-1/2  -translate-x-1/2 text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly gap-15 mt-5">{render}</div>
      </div>

      {/* post ui  */}

      {postData.length === 0 ? <h1 className="text-center text-gray-400 text-2xl">No Post Yet....</h1> : postData.map((postData, id) => (
        <div
          className="min-w-full flex flex-col bg-white lg:rounded-2xl"
          key={id}
        >
          <div className="flex w-full justify-between items-start p-5">
            <div className="flex gap-2 items-center">
              <img
                src={userData?.photo}
                alt="user"
                referrerPolicy="no-referrer"
                className="h-15 border rounded-full"
              />
              <div>
                <h1 className="leading-4 text-[1rem]">{userData?.name}</h1>
                <h1 className="text-sm/4 line-clamp-1">About</h1>
                <h1 className="text-sm/4 line-clamp-1">date</h1>
              </div>
            </div>
            <div className="text-2xl cursor-pointer">˙˙˙</div>
          </div>
          <div className="px-5">{postData?.caption}</div>
          <div className="w-full mt-1">
            {postData?.image && (
              <img
                className="w-full h-60 object-contain"
                src={`${postData.image}`}
                alt=""
              />
            )}
            {postData?.video && postData.video.includes("youtube") && (
              <iframe
                width="100%"
                height="300"
                src={postData.video.replace("watch?v=", "embed/")}
                title="video"
                allowFullScreen
                className="rounded-xl"
              />
            )}
          </div>
          <div className="w-full flex justify-between items-center px-2 py-1">
            <p>like</p>
            <p>comments</p>
          </div>
          <div className="flex justify-evenly items-center border-t border-gray-400 py-2">
            {LikeRender}
          </div>
        </div>
      ))}

      {PostModel && <Post closeHandler={closeHandler} />}
    </div>
  );
};

export default HomeMain;
