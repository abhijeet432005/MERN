import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Top from "../navbar/Top";
import SideNav from "./SideNav";
import { GrDislike, GrLike, GrMore } from "react-icons/gr";
import { SlShare } from "react-icons/sl";
import { BiDownload, BiSend } from "react-icons/bi";
import { FaScissors } from "react-icons/fa6";
import { API_KEY } from "../../utils/api/youtube";
import axios from "axios";
import { RiMore2Fill } from "react-icons/ri";
import Message from "../Chat Messages/Message";
import { useForm } from "react-hook-form";
import { LiveChat } from "../../store/actions/chatAction";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const [Icon, setIcon] = useState();
  const [searchParam] = useSearchParams();
  const [side, setside] = useState(false);
  const ID = searchParam.get("v");
  const videoData = useSelector((state) => state.video.video) || [];
  const video = videoData.find((item) => {
  const vidId = item.id?.videoId || item.id; // category search ke case me id.videoId hota hai
  return vidId === ID;
});
  console.log(videoData)
  const SideRef = useRef(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const handelClickOutside = (e) => {
      if(SideRef.current && !SideRef.current.contains(e.target)){
        setside(false)
      }
    }

    document.addEventListener("mousedown", handelClickOutside)

    return () => document.removeEventListener("mousedown",handelClickOutside)
  }, [])

  const getYTChannel = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video?.snippet?.channelId}&key=${API_KEY}`
      );
      // console.log(res)
      setIcon(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYTChannel();
  }, [video?.snippet?.channelId]);

  const toggle = () => {
    setside(!side);
  };

  const formatLike = (num) => {
    if(num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
    else if(num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K"
    else return (num)
  }

  const submitHandler = (data) => {
    dispatch(LiveChat(data))
    reset()
  }

  return (
    <>
      <Top toggle={toggle} />
      <div className="border-gray-200 min-w-max absolute top-0 left-0" ref={SideRef}>
        <SideNav side={side} />
      </div>

      <div className="mt-15 p-5 w-full flex gap-4">
        <div className="w-[68vw] flex flex-col gap-4 ">
          <iframe
            width="1000"
            height="580"
            src={`https://www.youtube.com/embed/${ID}?si=X8ZjCSEKoyKI3Gjg`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div>
            <h1 className="text-2xl">{video?.snippet?.title}</h1>
          </div>

          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-2">
              <img
                src={`${Icon}`}
                className="w-[2.5vw] mt-1 rounded-full"
                alt=""
              />

              <div>
                <h1 className="text-2xl">{video?.snippet?.channelTitle}</h1>
                <p className="leading-2">22.5M subscriber</p>
              </div>

              <button className="px-2 py-1 bg-gray-200 text-gray-500 text-xl rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button className="flex items-center gap-1.5 bg-gray-200 p-2 rounded-full">
                <GrLike /> {formatLike(video?.statistics?.likeCount)} |<GrDislike />
              </button>
              <button className="flex items-center gap-1.5 bg-gray-200 p-2 rounded-full">
                <SlShare /> Share
              </button>
              <button className="flex items-center gap-1.5 bg-gray-200 p-2 rounded-full">
                <BiDownload /> Download
              </button>
              <button className="flex items-center gap-1.5 bg-gray-200 p-2 rounded-full">
                <FaScissors /> Clip
              </button>
              <button className="flex items-center gap-1.5 bg-gray-200 p-2 rounded-full">
                <GrMore />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[30vw] h-fit border border-gray-200 rounded-2xl">
          <div className=" p-3 border-gray-300 flex justify-between items-center" >
            <h1>Top Chat</h1>
            <p><RiMore2Fill /></p>
          </div>

          {/* chat  */}

          <div className="h-[28vw] border-t border-b border-gray-300 overflow-x-auto p-3">
            <Message />
          </div>

          {/* Send Message  */}

          <div >
            <form onSubmit={handleSubmit(submitHandler)} className="flex p-3 items-center justify-center gap-3">
              <div className="flex border border-gray-400 rounded-full px-2 py-1 w-60 justify-between">
                <input type="text" placeholder="text" {...register("chat")} className="outline-0"/>
                <div>🙂</div>
              </div>
              <button className="text-2xl"><BiSend /></button>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
