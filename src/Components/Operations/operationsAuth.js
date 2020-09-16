import axios from "axios";
import { Loader, setError, setToken, setUserInfo, loginOut } from "../../redux/Actions";
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
  } catch (error) {
    console.log(error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(Loader(false));
  }
};
