import { createSlice } from "@reduxjs/toolkit";
import { login as loginApi } from "../actions/loginAction";

const initialState = {
  isLoggedIn: false,
  user : null,
  error : null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginHandler : (state,action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure : (state,action) =>{
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logoutHandler: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const login  = (email,password) => async (dispatch) => {
  try{
    const response = await loginApi(email,password);
    dispatch(loginHandler(response.data));
  }catch(error){
    dispatch(loginFailure(error.message));
  }
}
// Action creators are generated for each case reducer function
export const { loginHandler, logoutHandler,loginFailure } = authSlice.actions;

export default authSlice.reducer;
