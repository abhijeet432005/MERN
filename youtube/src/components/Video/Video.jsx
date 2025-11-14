import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../utils/api/youtube";

const Video = ({ elem }) => {
  const [Icon, setIcon] = useState("");
  const dispatch = useDispatch()

  const getYTChannel = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${elem.snippet.channelId}&key=${API_KEY}`
      );
      setIcon(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYTChannel();
  }, [elem]);

  const formatCount = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const second = Math.floor(diff / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const week = Math.floor(day / 7);
    const month = Math.floor(week / 30);
    const year = Math.floor(month / 365);

    if (year > 0) return `${year} year${year > 1 ? "s" : ""} ago`;
    if (month > 0) return `${month} month${month > 1 ? "s" : ""} ago`;
    if (week > 0) return `${week} week${week > 1 ? "s" : ""} ago`;
    if (day > 0) return `${day} day${day > 1 ? "s" : ""} ago`;
    if (hour > 0) return `${hour} hour${hour > 1 ? "s" : ""} ago`;
    return "Just now";
  };
  return (
    <div className="p-2 lg:p-0">
      <NavLink
        to={`/watch?v=${typeof elem.id === 'object' ? elem.id.videoId : elem.id}`}
        className="lg:w-[26vw] w-full  lg:ml-5 rounded-2xl overflow-hidden flex flex-col gap-2 lg:m-4"
      >
        <div className="w-full">
          <img
            src={`${elem.snippet?.thumbnails?.medium?.url}`}
            alt=""
            className="w-full h-full lg:h-[15vw] rounded-2xl"
          />
        </div>

        <div className="flex w-full gap-4 ">
          <div className="rounded-full h-fit flex justify-center items-center overflow-hidden">
            <img src={Icon} alt="" srcset="" className="lg:w-[2.5vw] lg:h-[2.5vw] w-10 rounded-full" />
          </div>

          <div className="w-full lg:w-[22vw]">
            <h1 className="w-full line-clamp-2">{elem.snippet.title}</h1>
            <p className="text-gray-400">{elem.snippet.channelTitle}</p>

            <div className="flex gap-1 text-gray-600">
              <p>{formatCount(elem?.statistics?.viewCount)} views</p>
              <h1 className="">·</h1>
              <p>{formatDate(elem?.snippet?.publishedAt)}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Video;


// 1:33