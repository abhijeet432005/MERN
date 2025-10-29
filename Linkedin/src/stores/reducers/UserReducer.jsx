import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, actions) => {
            state.user = actions.payload
        },

        logOutUser: (state) => {
            state.user = null
        }
    }
})

export const {setUser, logOutUser} = userReducer.actions

export default userReducer.reducer;