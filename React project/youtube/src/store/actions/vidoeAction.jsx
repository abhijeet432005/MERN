
import axios from "axios"
import { API_KEY, youtube } from "../../utils/api/youtube"
import { loadvideo } from "../reducer/VideoSlice"

export const asyncGetVideoData = () => async (dispatch) => {
    try {
        const res = await youtube.get("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "IN",
                maxResults: 2
            }
        })

        // console.log(res?.data)
        dispatch(loadvideo(res?.data))
    } catch (error) {
        console.log(error)
    }
}

export const asyncGetByCat = (cat) => async (dispatch) => {

  try {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: "snippet",
        maxResults: 4,
        q: `${cat}`,
        type: "video",
        key: API_KEY,
      },
    });
    // console.log(res)

    dispatch(loadvideo(res.data)); // only send array of videos
  } catch (error) {
    console.log(error);
  }
};
