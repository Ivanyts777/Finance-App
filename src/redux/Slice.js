import { createSlice } from "@reduxjs/toolkit";

const globalFuncEditState = (obj) => {
  return obj;
};

const initialStateSession = {
  user: {},
  error: null,
  token: false,
};

const session = createSlice({
  name: "session",
  initialState: initialStateSession,
  reducers: {
    setError: (state, { payload }) => ({ ...state, error: payload }),
    setToken: (state, { payload }) => ({ ...state, token: payload }),
    setUserInfo: (state, { payload }) => ({ ...state, user: payload }),
    loginOut: (state) => ({ ...initialStateSession, error: state.error }),
  },
});

export const { setError, setToken, setUserInfo, loginOut } = session.actions;
export default session.reducer;
