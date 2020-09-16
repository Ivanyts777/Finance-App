import axios from "axios";
import { useSelector } from "react-redux";
import { Loader, Error, setUserData, setData, removeData, modalAdd } from "../../redux/Actions";

const baseURL = "https://mywallet.goit.co.ua/api/";

export const getUserData = (token, userId) => async (dispatch) => {
  try {
    await dispatch(Loader(true));
    const result = await axios({
      method: "get",
      url: "https://app-wallet-14.herokuapp.com/api/transactions/" + userId,
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
      url: "https://app-wallet-14.herokuapp.com/api/transactions/",
      data: dataPost,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setData(result.data.transaction));
    dispatch(modalAdd(false));
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
    const result = await axios({
      method: "delete",
      url: "https://app-wallet-14.herokuapp.com/api/transactions/" + idTransaction,
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
