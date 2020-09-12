import { LOADERTYPE, ERRORTYPE, TOKENTYPE } from "../constants";

export const Loader = (value) => ({
  type: LOADERTYPE,
  payload: value,
});

export const Error = (value) => ({
  type: ERRORTYPE,
  payload: value,
});

export const setToken = (value) => ({
  type: TOKENTYPE,
  payload: value,
});

export const removeToken = () => ({
  type: TOKENTYPE,
  payload: "",
});
