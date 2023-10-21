import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart(state, action) {},
    loginSuccess(state, action) {},
    loginFailed(state, action) {},
  },
});

export const { loginFailed, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
