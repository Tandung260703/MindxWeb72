import { authApi } from "../../api/authApi";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await authApi.login(user.username, user.password);

    localStorage.setItem("ACCESS_TOKEN", res.accessToken);
    localStorage.setItem("REFRESH_TOKEN", res.refreshToken);
    localStorage.setItem("CURRENT_USER", JSON.stringify(res.user));

    dispatch(loginSuccess(res.user));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed());
  }
};
