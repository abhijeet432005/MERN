import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  streamingMessage: "",
  model: "GPT OSS 20B",
  loading: false,
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    // Replace all messages (when opening a chat)
    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    // Add a new message (user or assistant)
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    // AI response is streaming
    appendStreamingMessage: (state, action) => {
      state.streamingMessage += action.payload;
    },

    // Streaming finished
    finishStreamingMessage: (state) => {
      if (!state.streamingMessage.trim()) return;

      state.messages.push({
        role: "assistant",
        content: state.streamingMessage,
      });

      state.streamingMessage = "";
    },

    // Loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Clears just the in-flight streaming state (used when switching chats
    // mid-stream) without touching the already-loaded message history
    clearStreaming: (state) => {
      state.streamingMessage = "";
      state.loading = false;
    },

    // Clear all messages (logout / switching user)
    resetMessages: (state) => {
      state.messages = [];
      state.streamingMessage = "";
      state.loading = false;
    },
  },
});

export const {
  setMessages,
  addMessage,
  appendStreamingMessage,
  finishStreamingMessage,
  setLoading,
  clearStreaming,
  resetMessages,
} = messageSlice.actions;

export default messageSlice.reducer;