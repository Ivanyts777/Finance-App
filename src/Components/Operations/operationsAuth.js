import axios from "axios";
import { Loader, Error, setToken } from "../../redux/Actions";

const baseURL = "https://mywallet.goit.co.ua/api/";

export const createNewUser = (userData) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "register",
      data: userData,
    });
    console.log(result);
    dispatch(setToken(result.data.token));
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error));
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
    console.log(result);
    // dispatch(changeOptions({ Token: result.data.token, Name: result.data.user.name }));
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error));
  } finally {
    dispatch(Loader(false));
  }
};

export const userLoginOut = (token) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    await axios({
      method: "post",
      url: baseURL + "logout",
      headers: { Authorization: `Bearer ${token}` },
    });
    // dispatch(changeOptions({ Token: null, Name: "" }));
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error));
  } finally {
    dispatch(Loader(false));
  }
};
