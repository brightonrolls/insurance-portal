import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  policyData: {},
  loading: false,
};

export const policySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    resetData: (state) => {
      state.policyData = {};
    },
    saveUserTermDetails: (state, action) => {
      state.policyData = { ...action.payload };
    },
  },
});

export const { resetData, saveUserTermDetails } = policySlice.actions;

export default policySlice.reducer;
