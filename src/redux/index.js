import { combineReducers } from "redux";
import { session, global, finance } from "./Reducers";

const rootReducer = combineReducers({
  session,
  global,
  finance,
});

export default rootReducer;
