import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareItems: []
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    loadCompare: (state, action) => {
      state.compareItems = action.payload;
    },
    removeCompare: (state, action) => {
      state.compareItems = state.compareItems.filter(p => p.id !== action.payload);
    },
    clearCompare: (state) => {
      state.compareItems = [];
      localStorage.removeItem("compareItems");
    }
  }
});

export const { addToCompare, loadCompare, removeCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;