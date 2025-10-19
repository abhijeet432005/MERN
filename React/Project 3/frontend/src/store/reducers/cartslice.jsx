import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, actions) => {
            state.cart = actions.payload
        }
    }
})

export const { loadcart } = cartSlice.actions
export default cartSlice.reducer