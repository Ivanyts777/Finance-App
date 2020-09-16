import { LOADERTYPE, ERRORTYPE, TOKENTYPE, USERINFOTYPE, LOGINOUTTYPE, MODALADDTYPE, MODALLOGINTYPE, DATAADDTYPE, DATAREMOVETYPE, DATAEDITTYPE, DATASETTYPE, WINDOWTYPE } from "../constants";

const initialStateSession = {
  user: {},
  error: null,
  token: false,
};
export const session = (state = initialStateSession, { type, payload }) => {
  let newState = {};
  switch (type) {
    case ERRORTYPE:
      newState = { ...state, error: payload };
      break;
    case TOKENTYPE:
      newState = { ...state, token: payload };
      break;
    case USERINFOTYPE:
      newState = { ...state, user: payload };
      break;
    case LOGINOUTTYPE:
      newState = initialStateSession;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

const initialStateGlobal = {
  isModalAddTransactionOpen: false,
  isModalLoginOut: false,
  loader: false,
  windowSize: window.innerWidth,
};
export const global = (state = initialStateGlobal, { type, payload }) => {
  let newState = {};
  switch (type) {
    case LOADERTYPE:
      newState = { ...state, loader: payload };
      break;
    case MODALADDTYPE:
      newState = { ...state, isModalAddTransactionOpen: payload };
      break;
    case MODALLOGINTYPE:
      newState = { ...state, isModalLoginOut: payload };
      break;
    case WINDOWTYPE:
      newState = { ...state, windowSize: payload };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

const initialStateFinance = {
  data: [],
  balance: 0,
};
export const finance = (state = initialStateFinance, { type, payload }) => {
  let newState = {};
  let newData = [];
  switch (type) {
    case DATAADDTYPE:
      newData = [...state.data, payload];
      newState = { data: newData, balance: newData.reduce((acc, item) => (item.type === "income" ? acc + item.amount : acc - item.amount), 0) };
      break;
    case DATAREMOVETYPE:
      newData = [...state.data.filter((item) => item._id !== payload)];
      newState = { data: newData, balance: newData.reduce((acc, item) => (item.type === "income" ? acc + item.amount : acc - item.amount), 0) };
      break;
    case DATAEDITTYPE:
      newData = [...state.data.map((item) => (item.id === payload.id ? payload : item))];
      newState = { data: newData, balance: newData.reduce((acc, item) => (item.type === "income" ? acc + item.amount : acc - item.amount), 0) };
      break;
    case DATASETTYPE:
      let a = 0;
      newState = { data: payload, balance: payload.reduce((acc, item) => (item.type === "income" ? acc + item.amount : acc - item.amount), 0) };
      break;
    default:
      newState = state;
      break;
  }
  let a = 0;
  let newStateAfter = { ...newState, data: newState.data.map((item) => ((a = item.type === "income" ? a + item.amount : a - item.amount), { ...item, balanceAfter: a })) };
  return newStateAfter;
};
