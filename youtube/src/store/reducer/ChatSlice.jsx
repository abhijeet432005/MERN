import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: [],
};

const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    loadMessage: (state, action) => {
      if (state.message.length >= 40) {
        state.message.splice(0, 1); // sabse purana message delete karega
      }
      state.message.push(action.payload);
    },
  },
});

export const { loadMessage } = ChatSlice.actions;

export default ChatSlice.reducer;
