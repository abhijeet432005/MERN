import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  // stays false until the initial /auth/profile check resolves (success or
  // fail) — this is what ProtectedRoute waits on so a logged-in user never
  // flashes to /login on a hard refresh.
  authChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.authChecked = true;
    },

    // the initial profile check failed (no session) — not an error state,
    // just "we now know the user is signed out"
    authFailure: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.authChecked = true;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.authChecked = true;
    },
  },
});

export const { loginSuccess, authFailure, logout } = authSlice.actions;

export default authSlice.reducer;
