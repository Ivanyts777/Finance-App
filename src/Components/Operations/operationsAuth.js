import axios from "axios";
import { setError, setToken, loginOut, setUserInfo, Loader } from "../../redux/Slice";
import { getUserData } from "./operationsBD";

const baseURL = " https://app-wallet-14.herokuapp.com/api/auth/";

export const createNewUser = (userData) => async (dispatch) => {
  try {
    await dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "sign-up",
      data: userData,
    });
    dispatch(setToken(result.data.token));
    dispatch(setUserInfo(result.data.user));
    // axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
  } catch (error) {
    console.log(error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(Loader(false));
  }
};

export const userLogin = (userData) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "sign-in",
      data: userData,
    });
    dispatch(setToken(result.data.token));
    dispatch(setUserInfo(result.data.user));
    // axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
    await dispatch(getUserData(result.data.token, result.data.user.id));
  } catch (error) {
    dispatch(setError(error.message));
    console.log(error.message);
  } finally {
    dispatch(Loader(false));
  }
};

export const userLoginOut = () => async (dispatch) => {
  try {
    dispatch(Loader(true));
    await dispatch(loginOut());
    // axios.defaults.headers.common.Authorization = null;
  } catch (error) {
    console.log(error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(Loader(false));
  }
};
