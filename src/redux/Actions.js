import { LOADERTYPE, ERRORTYPE, TOKENTYPE, USERINFOTYPE, LOGINOUTTYPE, MODALADDTYPE, MODALLOGINTYPE, DATAADDTYPE, DATAREMOVETYPE, DATAEDITTYPE, DATASETTYPE, WINDOWTYPE } from "../constants";

// Loader (true or false)
export const Loader = (value) => ({
  type: LOADERTYPE,
  payload: value,
});

// Error (null or 'message')
export const Error = (value) => ({
  type: ERRORTYPE,
  payload: value,
});

// setToken ('asfsadcservsaercv')
export const setToken = (value) => ({
  type: TOKENTYPE,
  payload: value,
});

// removeToken (null)
export const removeToken = () => ({
  type: TOKENTYPE,
  payload: null,
});

// setUserInfo ({id: '', name: '', email: '', regData: ''})
export const setUserInfo = (value) => ({
  type: USERINFOTYPE,
  payload: value,
});
// loginOut ()
export const loginOut = () => ({
  type: LOGINOUTTYPE,
});

// modalAdd (true or false)
export const modalAdd = (value) => ({
  type: MODALADDTYPE,
  payload: value,
});

// modalLoginOut (true or false)
export const modalLoginOut = (value) => ({
  type: MODALLOGINTYPE,
  payload: value,
});

// setData ({...})
export const setData = (value) => ({
  type: DATAADDTYPE,
  payload: value,
});

// removeData (id)
export const removeData = (value) => ({
  type: DATAREMOVETYPE,
  payload: value,
});

// editData ({...})
export const editData = (value) => ({
  type: DATAEDITTYPE,
  payload: value,
});

// setUserData ([{},{},{}])
export const setUserData = (value) => ({
  type: DATASETTYPE,
  payload: value,
});

// setSizeWindow (123)
export const setSizeWindow = (value) => ({
  type: WINDOWTYPE,
  payload: value,
});
