import { configureStore } from "@reduxjs/toolkit";
import  VideoReducer  from './reducer/VideoSlice'
import ChatSlice from './reducer/ChatSlice'

const store = configureStore({
    reducer: {
        video: VideoReducer,
        chat: ChatSlice
    }
})

export default store