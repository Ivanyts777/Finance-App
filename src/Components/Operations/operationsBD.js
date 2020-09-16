import axios from "axios";
import { Loader, Error, setUserData, setData, removeData } from "../../redux/Actions";

const baseURL = "https://app-wallet-14.herokuapp.com/api/transactions/";

export const getUserData = (token, userId) => async (dispatch) => {
  try {
    await dispatch(Loader(true));
    const result = await axios({
      method: "get",
      url: baseURL + userId,
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(result);
    dispatch(setUserData(result.data.transactionsList));
  } catch (error) {
    console.log(error.message);
    dispatch(Error(error.message));
  } finally {
    dispatch(Loader(false));
  }
};

export const setPost = (token, dataPost) => async (dispatch) => {
  try {
    await dispatch(Loader(true));
    const result = await axios({
      method: "post",
      url: baseURL,
      data: dataPost,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setData(result.data.transaction));
  } catch (error) {
    console.log(error.message);
    dispatch(Error(error.message));
  } finally {
    dispatch(Loader(false));
  }
};

export const removePost = (idTransaction, token) => async (dispatch) => {
  try {
    await dispatch(Loader(true));
    await axios({
      method: "delete",
      url: baseURL + idTransaction,
      headers: { Authorization: `Bearer ${token}` },
    });
    await dispatch(removeData(idTransaction));
  } catch (error) {
    console.log(error.message);
    dispatch(Error(error.message));
  } finally {
    dispatch(Loader(false));
  }
};
