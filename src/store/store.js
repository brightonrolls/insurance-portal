import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import policyReducer from "../redux/policySlice";
import dashboardReducer from "../redux/dashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    policy: policyReducer,
    dashboard: dashboardReducer,
  },
});
