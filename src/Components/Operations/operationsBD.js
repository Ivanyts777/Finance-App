import axios from "axios";
import { Loader, Error, setUserData, setData, removeData } from "../../redux/Actions";

const baseURL = "https://mywallet.goit.co.ua/api/";

export const getUserData = (userId, token) => async (dispatch) => {
  try {
    const result = await axios({
      method: "get",
      url: baseURL + "finance/" + userId,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(result);
    dispatch(setUserData(result.finance));
  } catch (error) {
    dispatch(Error(error));
  }
};

export const setPost = (userId, token, dataPost) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "finance/" + userId,
      data: dataPost,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setData(result.finance.data));
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error));
  } finally {
    dispatch(Loader(false));
  }
};

export const removePost = (idTransaction, token) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL + "transactions/" + idTransaction,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(result);
    dispatch(removeData(idTransaction));
    // dispatch(setData(result.finance.data));
    dispatch(Error(null));
  } catch (error) {
    dispatch(Error(error));
  } finally {
    dispatch(Loader(false));
  }
};
