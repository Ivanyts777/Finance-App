import axios from "axios";
import { Loader, Error, setToken, setUserInfo, loginOut } from "../../redux/Actions";
import { getUserData } from "./operationsBD";

const baseURL = "https://mywallet.goit.co.ua/api/";

export const createNewUser = (userData) => async (dispatch) => {
  try {
    await dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "register",
      data: userData,
    });
    dispatch(setToken(result.data.token));
    dispatch(setUserInfo(result.data.user));
    dispatch(Error(null));
  } catch (error) {
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
      url: baseURL + "login",
      data: userData,
    });
    dispatch(setToken(result.data.token));
    dispatch(setUserInfo(result.data.user));
    getUserData(result.user.id, result.token);
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error.message));
  } finally {
    dispatch(Loader(false));
  }
};

export const userLoginOut = (token) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    await axios({
      method: "get",
      url: baseURL + "logout",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(loginOut());
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error.message));
  } finally {
    dispatch(Loader(false));
  }
};
