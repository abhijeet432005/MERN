import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: [],
  category: "All",
  Suggestion: [],
  pageToken: null,
};

const VideoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    loadvideo: (state, action) => {
      const { videos, nextPageToken } = action.payload;
      state.video = [...state.video, ...videos];
      state.pageToken = nextPageToken;
    },

    loadByCatogery: (state, action) => {
      state.category = action.payload;
    },

    SetSearch: (state, action) => {
      state.Suggestion = action.payload;
    },

    resetVideos: (state) => {
      state.video = [];
      state.pageToken = null;
    },
  },
});

export const { loadvideo, loadByCatogery, SetSearch, resetVideos } =
  VideoSlice.actions;
export default VideoSlice.reducer;
