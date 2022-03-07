import axios from "axios";

const loginStart = () => ({
  type: "LOGIN_START",
});
const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//logout

const logout = () => ({
  type: "LOGOUT",
});




export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
