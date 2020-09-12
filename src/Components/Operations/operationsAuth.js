import axios from "axios";
import { Loader } from "../../redux/Actions";
import { changeOptions } from "../../redux/slice/Options";

const baseURL = "https://goit-phonebook-api.herokuapp.com/users/";

export const createNewUser = (userData) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "signup",
      data: userData,
    });
    console.log(result);
    // dispatch(changeOptions({ Token: result.data.token }));
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
    console.log(result);
    // dispatch(changeOptions({ Token: result.data.token, Name: result.data.user.name }));
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
    // dispatch(changeOptions({ Token: null, Name: "" }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(Loader(false));
  }
};
