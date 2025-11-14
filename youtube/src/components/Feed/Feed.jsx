import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, youtube } from "../../utils/api/youtube";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "../Video/Video";
import { loadvideo, resetVideos } from "../../store/reducer/VideoSlice";
import axios from "axios";

const Feed = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.video.category);
  const videoData = useSelector((state) => state.video.video);
  const [hasMore, sethasMore] = useState(true);

  const fetchVideo = async () => {
    try {
      const res = await youtube.get("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 8,
          nextPageToken: 'nextPageToken',
        }
      })

      const video = res?.data.items || []
      const nextToken = res?.data?.nextPageToken;
      // console.log(nextToken)

      if (video.length === 0) sethasMore(false)

      else {
        sethasMore(true)
        dispatch(loadvideo({ video, nextPageToken: nextToken }));
      }

    } catch (error) {
      console.log(error)
    }
  }

  const fetchByCat = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: "snippet",
          maxResults: 8,
          q: `${category}`,
          type: "video",
          key: API_KEY,
          nextPageToken: 'nextPageToken',
        },
      });
      
      const video = res?.data.items || []
      const nextToken = res?.data?.nextPageToken;
      console.log(nextToken)

      if (video.length === 0) sethasMore(false)

      else {
        sethasMore(true)
        dispatch(loadvideo({ video, nextPageToken: nextToken }));
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(resetVideos())

    if (category === 'All') fetchVideo()
    else fetchByCat()

  }, [category])



  return (
    <div className="mt-[4.5rem] overflow-x-hidden flex flex-col gap-5 w-full">
      <Button />
      <InfiniteScroll
        dataLength={videoData.length}
        next={category === 'All' ? fetchVideo : fetchByCat}
        hasMore={hasMore}
        loader={
          <h4 className="text-xl text-center py-6 animate-pulse text-gray-500">
            Loading...
          </h4>
        }
        endMessage={
          <p className="text-center text-gray-600 py-6">
            <b>🎉 You’ve seen it all!</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-13">
          {videoData?.map((elem, id) => (
            <Video key={id} elem={elem} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Feed;
