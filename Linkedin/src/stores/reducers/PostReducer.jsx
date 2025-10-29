import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: null
}

const postReducer = createSlice({
    name: "post",
    initialState,
    reducers: {
        loadPost: (state, action) => {
            state.post = action.payload
        }
    }
})

export const {loadPost} = postReducer.actions
export default postReducer.reducer