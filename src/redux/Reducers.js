import { LOADERTYPE, ERRORTYPE, TOKENTYPE, USERINFOTYPE, LOGINOUTTYPE, MODALADDTYPE, MODALLOGINTYPE, DATAADDTYPE, DATAREMOVETYPE, DATAEDITTYPE, DATASETTYPE } from "../constants";

// {
//     id: "5f5f40d13b62e40d0f7b0f00",
//     name: "Peter Shevchuk",
//     email: "raf02041994@gmail.com",
//     createdAt: "2020-09-14T10:07:13.179Z",
//   },

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
    default:
      newState = state;
      break;
  }
  return newState;
};

const initialStateFinance = {
  data: [
    {
      id: "5f5b6054a375e00024070433",
      type: "expense",
      amount: 200,
      category: "Car",
      transactionDate: "2020-09-10T21:00:00.000Z",
      comment: "oil",
      userId: "123123123",
      balanceAfter: -200,
      balanceAfterSign: "-",
      createdAt: "2020-09-11T11:32:36.238Z",
      updatedAt: "2020-09-11T11:32:36.238Z",
    },
    {
      id: "5f5b60baa375e00024070434",
      type: "income",
      amount: 10000000,
      category: "income",
      transactionDate: "2020-09-10T21:00:00.000Z",
      comment: "zarplata",
      userId: "123123123",
      balanceAfter: 9999800,
      balanceAfterSign: "+",
      createdData: "2020-09-11T11:34:18.615Z",
      updatedData: "2020-09-11T11:34:18.615Z",
    },
  ],
  balance: 0,
};
export const finance = (state = initialStateFinance, { type, payload }) => {
  let newState = {};
  let newData = [];
  switch (type) {
    case DATAADDTYPE:
      newData = [payload, ...state.data];
      newState = { data: newData, balance: newData.reduce((acc, item) => acc + item.amount, 0) };
      break;
    case DATAREMOVETYPE:
      newData = [...state.data.filter((item) => item.id !== payload)];
      newState = { data: newData, balance: newData.reduce((acc, item) => acc + item.amount, 0) };
      break;
    case DATAEDITTYPE:
      newData = [...state.data.map((item) => (item.id === payload.id ? payload : item))];
      newState = { data: newData, balance: newData.reduce((acc, item) => acc + item.amount, 0) };
      break;
    case DATASETTYPE:
      newState = { data: payload.data, balance: payload.totalBalance };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
