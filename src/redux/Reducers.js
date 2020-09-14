import { LOADERTYPE, ERRORTYPE, TOKENTYPE, USERINFO, MODALADDTYPE, MODALLOGINTYPE, DATAADDTYPE, DATAREMOVETYPE, DATAEDITTYPE } from "../constants";

const initialStateSession = {
  user: {
    id: "123123123",
    name: "VOVA",
    email: "123123123@gmail.com",
    regData: "2020-09-11T11:29:51.966Z",
  },
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
    case USERINFO:
      newState = { ...state, user: payload };
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
  switch (type) {
    case DATAADDTYPE:
      newState = {
        data: [...state.data, payload],
        balance: state.data.reduce((acc, item) => acc + item.amount, 0),
      };
      break;
    case DATAREMOVETYPE:
      newState = { data: [...state.data.filter((item) => item.id !== payload)], balance: state.data.reduce((acc, item) => acc + item.amount, 0) };
      break;
    case DATAEDITTYPE:
      newState = { data: [...state.data.map((item) => (item.id === payload.id ? payload : item))], balance: state.data.reduce((acc, item) => acc + item.amount, 0) };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

// export const loader = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case LOADERTYPE:
//       return payload;
//     default:
//       return state;
//   }
// };

// export const error = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ERRORTYPE:
//       return payload;
//     default:
//       return state;
//   }
// };

// export const token = (state = "initialState", { type, payload }) => {
//   switch (type) {
//     case TOKENTYPE:
//       return payload;
//     default:
//       return state;
//   }
// };
