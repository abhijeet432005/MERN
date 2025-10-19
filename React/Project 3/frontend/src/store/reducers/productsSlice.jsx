import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "porducts",
    initialState,
    reducers: {
        loadproducts: (state, actions) => {
            state.products = actions.payload
        }
    }
})

export const { loadproducts } = productSlice.actions
export default productSlice.reducer