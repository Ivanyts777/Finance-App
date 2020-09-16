import axios from "axios";
import { Loader, Error, setToken, setUserInfo, loginOut } from "../../redux/Actions";
import { getUserData } from "./operationsBD";

const baseURL = " https://app-wallet-14.herokuapp.com/api/";

export const createNewUser = (userData) => async (dispatch) => {
  try {
    await dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: "https://app-wallet-14.herokuapp.com/api/auth/sign-up",
      data: userData,
    });
    dispatch(setToken(result.data.token));
    dispatch(setUserInfo(result.data.user));
    dispatch(Error(null));
  } catch (error) {
    console.log(error.message);
    dispatch(Error(error.message));
  } finally {
    dispatch(Loader(false));
  }
};

export const userLogin = (userData) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: "https://app-wallet-14.herokuapp.com/api/auth/sign-in",
      data: userData,
    });
    dispatch(setToken(result.data.token));
    dispatch(setUserInfo(result.data.user));
    // dispatch(getUserData(result.data.token));
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error.message));
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
    dispatch(Error(error.message));
  } finally {
    dispatch(Loader(false));
  }
};
