import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginHandler: (state) => {
      state.isLoggedIn = true;
    },
    logoutHandler: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginHandler, logoutHandler } = authSlice.actions;

export default authSlice.reducer;
