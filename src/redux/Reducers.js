import { LOADERTYPE, ERRORTYPE, TOKENTYPE } from "../constants";

const initialState = false;

export const loader = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADERTYPE:
      return payload;
    default:
      return state;
  }
};

export const error = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERRORTYPE:
      return payload;
    default:
      return state;
  }
};

export const token = (state = "initialState", { type, payload }) => {
  switch (type) {
    case TOKENTYPE:
      return payload;
    default:
      return state;
  }
};
