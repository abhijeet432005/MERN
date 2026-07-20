import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  activeChatId: null,
};

const getId = (chat) => chat?._id ?? chat?.id;

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    // adds a chat to the top of the list AND makes it the active chat.
    // previously this set `activeChatId` to the whole chat object instead
    // of its id, so the newly created chat never actually showed as active.
    createChat: (state, action) => {
      state.chats.unshift(action.payload);
      state.activeChatId = getId(action.payload);
    },

    setAllChats: (state, action) => {
      state.chats = action.payload;
    },

    setActiveChat: (state, action) => {
      state.activeChatId = action.payload;
    },

    renameChat: (state, action) => {
      const { id, title } = action.payload;
      const chat = state.chats.find((c) => getId(c) === id);
      if (chat) chat.title = title;
    },

    deleteChat: (state, action) => {
      const id = action.payload;
      state.chats = state.chats.filter((c) => getId(c) !== id);
      if (state.activeChatId === id) {
        state.activeChatId = null;
      }
    },

    // bumps a chat to the top + refreshes its lastActivity — used right
    // after sending a message so the sidebar reorders instantly instead of
    // waiting on the next full refetch
    touchChat: (state, action) => {
      const id = action.payload;
      const index = state.chats.findIndex((c) => getId(c) === id);
      if (index === -1) return;

      const [chat] = state.chats.splice(index, 1);
      chat.lastActivity = new Date().toISOString();
      state.chats.unshift(chat);
    },

    resetChats(state) {
      state.chats = [];
      state.activeChatId = null;
    },
  },
});

export const {
  createChat,
  setAllChats,
  setActiveChat,
  renameChat,
  deleteChat,
  touchChat,
  resetChats,
} = chatSlice.actions;

export default chatSlice.reducer;
