import axios from "axios";
import { Loader } from "../../redux/slice/Loader";
import { changeOptions } from "../../redux/slice/Options";
import { setUserInfo } from "../../redux/slice/UserInfo";

const baseURL = "https://goit-phonebook-api.herokuapp.com/users/";

export const createNewUser = (userData) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "signup",
      data: userData,
    });
    dispatch(changeOptions({ Token: result.data.token }));
  } catch (error) {
    console.log(error);
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
    dispatch(changeOptions({ Token: result.data.token, Name: result.data.user.name }));
  } catch (error) {
    console.log(error);
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
    dispatch(changeOptions({ Token: null, Name: "" }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(Loader(false));
  }
};

export const getUserInfo = (token) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "",
      url: baseURL + "current",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setUserInfo(result.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(Loader(false));
  }
};
