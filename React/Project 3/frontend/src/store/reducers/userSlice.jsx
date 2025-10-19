import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState = {
    user: null
}

const userSlice =  createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            state.user = action.payload
        },

        logOutUser: (state) => {
            state.user = null
        }
    }
})

export const {loaduser, logOutUser} = userSlice.actions

export default userSlice.reducer