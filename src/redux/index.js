import { combineReducers } from "redux";

import { session, global, finance } from "../redux/Slice";

const rootReducer = combineReducers({
  session,
  global,
  finance,
});

export default rootReducer;
