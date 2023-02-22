import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const getDashboardDetails = createAsyncThunk(
  "dashboard/getDashboardDetails",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    return res;
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: {
    [getDashboardDetails.pending]: (state) => {
      state.loading = true;
    },
    [getDashboardDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getDashboardDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default dashboardSlice.reducer;
