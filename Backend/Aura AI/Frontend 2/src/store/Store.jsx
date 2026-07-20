import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/authSlice";
import chats from "./reducers/chatSlice";
import message from "./reducers/messageSlice";

export const store = configureStore({
  reducer: {
    authSlice: auth,
    chatSlice: chats,
    messageSlice: message,
  },
});