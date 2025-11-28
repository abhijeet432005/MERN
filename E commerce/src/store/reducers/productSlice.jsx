import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  relatedProduct: [],
  singleProduct: [],
  Selectedcategory: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProduct: (state, actions) => {
      state.product = [...state.product, ...actions.payload].filter(
        (item, index, arr) => index === arr.findIndex((p) => p.id === item.id)
      );
    },
    clearProduct: (state) => {
      state.product = [];
    },
    loadRelatedPro: (state, actions) => {
      state.relatedProduct = actions.payload;
    },
    laodCat: (state, actions) => {
      state.Selectedcategory = actions.payload;
    },
    loadSingleProduct: (state, actions) => {
      state.singleProduct = actions.payload;
    },
    clearSinglePro: (state) => {
      state.singleProduct = [];
    },
  },
});

export const {
  loadProduct,
  loadRelatedPro,
  laodCat,
  loadSingleProduct,
  clearSinglePro,
  clearProduct,
  Selectedcategory
} = productSlice.actions;
export default productSlice.reducer;
