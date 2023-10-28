import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.login.isFetching = true;
    },
    loginSuccess(state, action) {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed(state) {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = true;
    },
  },
});

export const { loginFailed, loginStart, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
