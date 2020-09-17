import { createSlice } from "@reduxjs/toolkit";

const initialStateSession = {
  user: {},
  error: null,
  token: false,
};
const sessionSlice = createSlice({
  name: "session",
  initialState: initialStateSession,
  reducers: {
    setError: (state, { payload }) => ({ ...state, error: payload }),
    setToken: (state, { payload }) => ({ ...state, token: payload }),
    removeToken: (state, { payload }) => ({ ...state, token: null }),
    setUserInfo: (state, { payload }) => ({ ...state, user: payload }),
    loginOut: () => initialStateSession,
  },
});

const initialStateGlobal = {
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  isModalLoginOut: false,
  isModalDelTransaction: false,
  loader: false,
  windowSize: window.innerWidth,
};
const globalSlice = createSlice({
  name: "global",
  initialState: initialStateGlobal,
  reducers: {
    Loader: (state, { payload }) => ({ ...state, loader: payload }),
    modalAdd: (state, { payload }) => ({ ...state, isModalAddTransactionOpen: payload }),
    modalEdit: (state, { payload }) => ({ ...state, isModalEditTransactionOpen: payload }),
    modalDel: (state, { payload }) => ({ ...state, isModalDelTransaction: payload }),
    modalLoginOut: (state, { payload }) => ({ ...state, isModalLoginOut: payload }),
    setSizeWindow: (state, { payload }) => ({ ...state, windowSize: payload }),
  },
});

const initialStateFinance = {
  data: [],
  //   editData: [{ name: "lol" }],
  //   balance: 0,
};
const financeEditArray = (array) => {
  let balanceAfter = 0;
  const newState = { data: array, balance: array.reduce((acc, item) => (item.type === "income" ? acc + item.amount : acc - item.amount), 0) };
  const newDataObj = { ...newState, data: newState.data.map((item) => ((balanceAfter = item.type === "income" ? balanceAfter + item.amount : balanceAfter - item.amount), { ...item, balanceAfter: balanceAfter })) };
  return newDataObj;
};
const checkDataEdit = (state, obj) => {
  if (state.dataEdit.find((item) => item._id === obj._id)) {
    return { ...state, dataEdit: [...state.dataEdit, { ...state.dataEdit.find((item) => item._id === obj._id), ...obj }] };
  }
  return { ...state, dataEdit: [...state.dataEdit, obj] };
};
const financeSlice = createSlice({
  name: "finance",
  initialState: initialStateFinance,
  reducers: {
    setData: ({ data }, { payload }) => financeEditArray([...data, payload]),
    removeData: ({ data }, { payload }) => financeEditArray([...data.filter((item) => item._id !== payload)]),
    editData: (state, { payload }) => checkDataEdit(state, payload),
    setUserData: (state, { payload }) => financeEditArray(payload),
  },
});

export const session = sessionSlice.reducer;
export const { setError, setToken, setUserInfo, loginOut } = sessionSlice.actions;

export const global = globalSlice.reducer;
export const { Loader, modalAdd, modalEdit, modalLoginOut,modalDel, setSizeWindow } = globalSlice.actions;

export const finance = financeSlice.reducer;
export const { setData, removeData, editData, setUserData } = financeSlice.actions;
