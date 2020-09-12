import { combineReducers } from "redux";
import { loader, error, token } from "./Reducers";

const rootReducer = combineReducers({
  loader,
  error,
  token,
});

export default rootReducer;
