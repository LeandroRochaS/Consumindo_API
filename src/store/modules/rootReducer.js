import { combineReducers } from "redux";

import reducer from "./exemple/reduce";

export default combineReducers({
  example: reducer,
});
